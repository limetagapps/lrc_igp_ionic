import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordpressService } from '../../services/wordpress.service';
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-terms-and-conditions',
    templateUrl: 'terms-and-conditions.html',
})
export class TermsAndConditionsPage {

    posts: String;
    description1: String;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public wordpressService: WordpressService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TermsAndConditionsPage');
    }

    ionViewWillEnter(){
        console.log("entering");
        Observable.forkJoin(
            this.wordpressService.getTerms())
            .subscribe(data => {
                this.posts = data[0].content.rendered;
                //this.posts.forEach( p => {
                this.description1 = this.posts;
                //});
            });
    }

}
