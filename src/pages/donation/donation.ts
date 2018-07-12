import { Component, ViewChild } from '@angular/core';
import {IonicPage, Keyboard, NavController, NavParams, Slides} from 'ionic-angular';
import { SubmitDonationPage } from '../submit-donation/submit-donation';
import { DONATIONS } from '../../mocks/donation-content';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import { WordpressService } from '../../services/wordpress.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import $ from "jquery";
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the DonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-donation',
    templateUrl: 'donation.html',
})
export class DonationPage {
    @ViewChild('slides') slides: Slides;

    donations: Array<any>;// = DONATIONS;

    posts: Array<any>;
    pdata;

    subscription:string = "";
    service: string  = "";
    station: string = "";
    localSelect: boolean = false;
    public prevBtn: boolean = true;
    public nextBtn: boolean = true;
    subscriptionVal: string;
    subsContents: boolean;



    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public wordpressService: WordpressService,
                public authenticationService: AuthenticationService,
                public iab: InAppBrowser,
                public alertCtrl: AlertController,
                public keyboard: Keyboard) {
        this.prevBtn = false;
        this.subscriptionVal = "Monthly";
        this.subsContents = false;




    }
    ionViewDidLoad() {
        this.subscription = "onetime";
    }


    ionViewWillEnter(){
        console.log("entering");

        Observable.forkJoin(this.wordpressService.getProducts()).subscribe(data => {

            this.posts = data[0];
            //console.log(this.posts[0]);
            this.donations = [];
            this.posts[0].products.forEach( p => {
                if(p.price === "0")
                {
                    this.pdata = {
                        id: p.id,
                        dollar : 'OTHER',
                        value : 'Other',
                        subscription: 'Monthly',
                        subscriptionContent: false
                    };
                }
                else {
                    this.pdata = {
                        id: p.id,
                        dollar: p.price + "$",
                        value: p.price,
                        subscription: 'Monthly',
                        subscriptionContent: false
                    };
                }
                console.log(this.pdata);
                this.donations.push(this.pdata);
            });
        });

    }

    next() {
        let next = this.slides.slideNext();
        console.log('NEXT: ', this.slides.getActiveIndex());

        if(this.slides.getActiveIndex() == 5){
            this.nextBtn = false;
        }else{
            this.nextBtn = true;
        }

        if(this.slides.getActiveIndex() == 0){
            this.prevBtn = false;
        }else{
            this.prevBtn = true;
        }
    }

    prev() {
        this.slides.slidePrev();
        console.log('PREV: ', this.slides.getActiveIndex());

        if(this.slides.getActiveIndex() == 0){
            this.prevBtn = false;
        }else{
            this.prevBtn = true;
        }

        if(this.slides.getActiveIndex() == 5){
            this.nextBtn = false;
        }else{
            this.nextBtn = true;
        }
    }
    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    presentPrompt() {
        let alert = this.alertCtrl.create({
            title: 'LRC Donation Amount',
            inputs: [
                {
                    name: 'donationValue',
                    placeholder: 'Value'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: data => {
                        this.donateBtn(data.donationValue);
                    }
                }
            ]
        });
        alert.present();
    }

    donateBtn(donationValue){
        let donation = this.donations[this.slides.getActiveIndex()];
        // console.log(this.makeid());
        if(donation.value === "Other")
        {
            if(donationValue == undefined) {
                this.presentPrompt();
                return;
            }
            else
            {
                donation.value = donationValue;
            }
        }
        let oid = this.makeid();
        let total = donation.value;
        let email = "gerard@limetag.me";
        let target = "_blank";
        let theOtherUrl = "res=success";
        let errorUrl = "res=error";

        const browser = this.iab.create("https://supportlrc.app/pay_red/startpay.php?oid="+oid+"&total="+total+"&customer_email="+email,target, 'location=no');

        browser.on('loadstart').subscribe((e) => {
            console.log(e.url);
            let token = this.getParameterByName("token_name", e.url);
            if (e.url.indexOf(theOtherUrl) !== -1) {
                console.log("SUCCESS_PAY");
                browser.close();
                this.wordpressService.createOrder(donation, oid, this.service, this.station)
                    .subscribe(res => {
                            console.log("ORDER_RES: "+ res);
                            const alert = this.alertCtrl.create({
                                title: 'LRC IGP',
                                subTitle: 'Thank you for your donation!',
                                buttons: ['OK']
                            });
                            alert.present();
                        },
                        err => {
                            const alert = this.alertCtrl.create({
                                title: 'LRC IGP',
                                subTitle: 'There was an error proccessing your payment!',
                                buttons: ['OK']
                            });
                            alert.present();
                            console.log("ORDER_ERR: "+ err);
                        });
                if(token != null)
                    this.wordpressService.saveCard(token)
                        .subscribe(res => {

                            },
                            err => {
                            });


            }
            if (e.url.indexOf(errorUrl) !== -1) {
                console.log("ERROR_PAY");
                const alert = this.alertCtrl.create({
                    title: 'LRC IGP',
                    subTitle: 'There was an error proccessing your payment!',
                    buttons: ['OK']
                });
                alert.present();
                browser.close();
            }
        });


        //this.navCtrl.push(SubmitDonationPage,{ donation });
    }


    subBtn(subValue){
        this.subscriptionVal = subValue;
        this.subsContents = false;
    }
    showSubsContens(num){
        let donation = this.donations[num];
        if(donation.subscriptionContent == true){
            donation.subscriptionContent = false;
        }else{
            donation.subscriptionContent = true;
        }
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    serviceChange(){
        console.log(this.service);
        if(this.service === "local")
            this.localSelect = true;
        else
            this.localSelect = false;
    }
}
