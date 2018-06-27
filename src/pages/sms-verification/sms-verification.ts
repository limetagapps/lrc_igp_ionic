import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController, LoadingController} from 'ionic-angular';
import { AddressDetailsPage } from '../address-details/address-details';

import { WordpressService } from '../../services/wordpress.service';


import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SmsVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms-verification',
  templateUrl: 'sms-verification.html',
})
export class SmsVerificationPage {

  newUser: {};
  code: string;
  codetxt: string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtrl: MenuController,
              public wordpressService: WordpressService,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    this.menuCtrl.enable(false,"myMenu");
    this.newUser = [this.navParams.get('newUser')];
    console.log("name", " ", this.newUser[0].name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsVerificationPage');



    this.wordpressService.getPhoneCode(this.newUser[0].phone)
      .subscribe(res => {
          //console.log("Res: ", JSON.stringify(res));
          this.code = res.code;
          console.log("RECEIVED_CODE: ", this.code);
        },
        err => {
          console.log("Error: ", JSON.stringify(err));
        });
  }

  ionViewWillEnter(){
    // $.get( "https://supportlrc.app/verify/sms.php?phone="+this.newUser[0].phone, function( data ) {
    //
    //   console.log(data);
    //
    // });
  }

  resendCode(){
    let loading = this.loadingCtrl.create({});
    loading.present();

    this.code = "";
    this.wordpressService.getPhoneCode(this.newUser[0].phone)
      .subscribe(res => {
          //console.log("Res: ", JSON.stringify(res));
          this.code = res.code;
          console.log("RECEIVED_CODE: ", this.code);
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: 'LRC IGP',
            subTitle: 'A new code has been sent via sms! Please check it',
            buttons: ['OK']
          });
          alert.present();

        },
        err => {
          console.log("Error: ", JSON.stringify(err));
        });
  }

  addressDetails(){

    console.log(this.code, " ", this.codetxt);
    if (this.code == this.codetxt) {
      let newUser = {
        "name": this.newUser[0].name,
        "phone": this.newUser[0].phone,
        "password": this.newUser[0].password,
        "email": this.newUser[0].email
      };
      this.navCtrl.push(AddressDetailsPage, {newUser});
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'LRC IGP',
        subTitle: 'Please paste the code received by SMS!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
