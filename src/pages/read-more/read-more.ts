import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReadMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-more',
  templateUrl: 'read-more.html',
})
export class ReadMorePage {
	slide: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.slide = [this.navParams.get('slide')];
  	console.log(this.slide);
    this.slide[0].subBGImage =  this.slide[0].subBGImage.replace('url(','');
    this.slide[0].subBGImage =  this.slide[0].subBGImage.replace(')','');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadMorePage');
  }

}
