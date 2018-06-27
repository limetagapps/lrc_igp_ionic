import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { DonationTabsPage } from '../donation-tabs/donation-tabs';
import { DonationPage } from '../donation/donation';

/**
 * Generated class for the HomeTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 
 */

@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {
	tab0Root:any = ProfilePage;
	tab1Root:any = HomePage; 
	tab2Root:any = SettingsPage;
	myIndex: number;
	bFab: boolean;
	constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
		//this.myIndex = navParams.data.tabIndex || 0; 
		this.myIndex =  0; 
		let status = navParams.get('data');
		console.log('STATUS: ', status); 
		this.bFab = true;
		if(navParams.get('root')){
			this.tab1Root = navParams.get('root');
			this.bFab = false;
		}else if(navParams.get('root2')){
			this.tab1Root = navParams.get('root2');
			this.bFab = true;
			console.log('root2: ',navParams.get('root2'));
		}
		if(status){
			this.bFab = true;
			let alert = this.alertCtrl.create({
			    title: 'SupportLRC',
			    message: 'Thank you for your Donation! <br /> Spread the word and help us save lives.',
			    cssClass: 'custom-alert-btn',
			    buttons: [
			      {
			        text: 'SHARE',
			        handler: () => {
			          this.navCtrl.setRoot(HomeTabsPage);
			        }
			      },
			      {
			        text: 'NO, THANKS',
			        handler: () => {
			          console.log('No thanks clicked');
			        }
			      }
			    ]
			});
			alert.present();
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomeTabsPage');
	}

	donationPage(){
		//this.navCtrl.push(HomeTabsPage,{root: DonationPage});
		this.navCtrl.push(DonationPage,{root: DonationPage});
	}

}

