import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { DonationPage } from '../donation/donation';
/**
 * Generated class for the DonationTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donation-tabs',
  templateUrl: 'donation-tabs.html',
})
export class DonationTabsPage {
	tab0Root = ProfilePage;
	tab1Root = DonationPage; 
	tab2Root = SettingsPage;
	myIndex: number;
	donationBtn: boolean;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.myIndex = navParams.data.tabIndex || 0; 
		let a = this.navCtrl.getActive().component;
		let donationStatus = navParams.get('data');
		this.donationBtn = false;
		if(donationStatus){
			this.donationBtn = true;
		}
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationTabsPage');
  }

}
