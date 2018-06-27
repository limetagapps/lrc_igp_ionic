import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { DonationTabsPage } from '../donation-tabs/donation-tabs';

/**
 * Generated class for the HomeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-info',
  templateUrl: 'home-info.html',
})
export class HomeInfoPage {
	tab0Root = ProfilePage;
	tab1Root = HomePage; 
	tab2Root = SettingsPage;
	myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.myIndex = navParams.data.tabIndex || 0; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeInfoPage');
  }

}
