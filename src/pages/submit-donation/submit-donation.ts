import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomeTabsPage } from '../home-tabs/home-tabs'; 
import { DonationTabsPage } from '../donation-tabs/donation-tabs'; 
import { HomePage } from '../home/home'; 
import { HomeInfoPage } from '../home-info/home-info'; 

/**
 * Generated class for the SubmitDonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submit-donation',
  templateUrl: 'submit-donation.html',
})
export class SubmitDonationPage {
  donation: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false,'myMenu');
    this.donation = this.navParams.get('donation');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitDonationPage');
  }
  playBtn(){
  	this.navCtrl.push(HomeTabsPage,{root2: HomePage, data: true});
  }

}
