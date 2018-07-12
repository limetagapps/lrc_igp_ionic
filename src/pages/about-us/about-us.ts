import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {WordpressService} from "../../services/wordpress.service";

/**
 * Generated class for the PrivacyPolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-about-us',
    templateUrl: 'about-us.html',
})
export class AboutUsPage {

    posts: String;
    description1: String;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public wordpressService: WordpressService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutUsPage');
    }

    ionViewWillEnter(){
        console.log("entering");
        Observable.forkJoin(
            this.wordpressService.getAboutus())
            .subscribe(data => {
                this.posts = data[0].content.rendered;
                //this.posts.forEach( p => {
                    this.description1 = this.posts;
                //});
            });
    }

}
