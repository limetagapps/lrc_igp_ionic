import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { TabsPage } from '../pages/tabs/tabs';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { DonationTabsPage } from '../pages/donation-tabs/donation-tabs';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SliderPage } from '../pages/slider/slider';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { EnterActivationCodePage } from '../pages/enter-activation-code/enter-activation-code';
import { SmsVerificationPage } from '../pages/sms-verification/sms-verification';
import { AddressDetailsPage } from '../pages/address-details/address-details';
import { SubmitDonationPage } from '../pages/submit-donation/submit-donation';
import { AuthenticationService } from '../services/authentication.service';
import { Events } from 'ionic-angular';


/* Menu Pages */
import { AboutUsPage } from '../pages/about-us/about-us';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { GetInTouchPage } from '../pages/get-in-touch/get-in-touch';
import { LiveChatPage } from '../pages/live-chat/live-chat';
import {ProfilePage} from "../pages/profile/profile";

export interface PageInterface{
    title: string;
    pageName: string;
    tabComponent?: any;
    index?: number;
    icon: string;
}


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    @ViewChild('myApp') app: App;

    rootPage: any = LoginPage;
	loader: any;
    activePage: any;
    /* pages: PageInterface[] = [
       {title: 'Terms & Condition', pageName: 'TermsAndConditionsPage', tabComponent: 'TermsAndConditionPage',index: 0, icon: ''},
       {title: 'Privacy Policy', pageName: 'PrivacyPolicyPage', tabComponent: 'PrivacyPolicyPage',index: 1, icon: ''},
       {title: 'About Us', pageName: 'AboutUsPage', tabComponent: 'AboutUsPage',index: 2, icon: ''},
     ]; */

    pages: Array<{title: string, component: any}>;

    public user_name: String = "";

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public authenticationService: AuthenticationService,
        public events: Events,
		public loadingCtrl: LoadingController,
		public storage: Storage

    ){
 
    this.presentLoading();
 
    this.platform.ready().then(() => {
 
      this.storage.get('introShown').then((result) => {
 
        if(result){
          this.rootPage = 'LoginPage';
        } else {
          this.rootPage = 'SliderPage';
          this.storage.set('introShown', true);
        }
 
        this.loader.dismiss();
 
      });
 
    });
			
			
		this.initializeApp();

        events.subscribe('user:login', () => {
            this.loggedIn();
        });

        // used for an example of ngFor and navigation

        this.pages = [
            { title: 'Home', component: HomeTabsPage },
            { title: 'Live Chat', component: LiveChatPage },
            { title: 'Get in touch', component: GetInTouchPage },
            { title: 'Terms of Use', component: TermsAndConditionsPage },
            { title: 'Privacy Policy', component: PrivacyPolicyPage },
            { title: 'About Us', component: AboutUsPage },
        ];
        this.activePage = this.pages[0].component;

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            //this.splashScreen.hide();
        });
    }

    loggedIn() {
        console.log("logged in");
        this.user_name = localStorage.getItem("user_name");
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario

        this.activePage = page.component;

        this.nav.setRoot(page.component);
        //  let params = {};

        // // The index is equal to the order of our tabs inside tabs.ts

        // if (page.index) {
        //   params = { tabIndex: page.index };
        // }

        // //The active child nav is our Tabs Navigation
        // if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
        //   this.nav.getActiveChildNavs()[0].select(page.index);
        // } else {
        //   // Tabs are not active, so reset the root page
        //   // In this case: moving to or from SpecialPage
        //   console.log("page changed");
        //   this.nav.setRoot(page.pageName, params);
        // }
    }

    checkActive(page){
        return page.component === this.activePage;
    }

    openProfile(){
        this.nav.push(ProfilePage);
    }

    signOut(){
        localStorage.setItem("user_name", "");
        this.nav.push(LoginPage);
		window.location.reload();
    }
	
	
  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
 
    this.loader.present();
 
  }
 

}
