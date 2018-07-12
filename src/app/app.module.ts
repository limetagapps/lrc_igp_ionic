import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular'; 
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ProgressBarModule } from "angular-progress-bar"
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';

import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SliderPage } from '../pages/slider/slider';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { EnterActivationCodePage } from '../pages/enter-activation-code/enter-activation-code';
import { SmsVerificationPage } from '../pages/sms-verification/sms-verification';
import { AddressDetailsPage } from '../pages/address-details/address-details';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { DonationPage } from '../pages/donation/donation';
import { DonationTabsPage } from '../pages/donation-tabs/donation-tabs';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { ReadMorePage } from '../pages/read-more/read-more';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { SubmitDonationPage } from '../pages/submit-donation/submit-donation';
import { HomeInfoPage } from '../pages/home-info/home-info';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { SliderPageModule } from '../pages/slider/slider.module';
/* Menu Pages */
import { AboutUsPage } from '../pages/about-us/about-us';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { GetInTouchPage } from '../pages/get-in-touch/get-in-touch';
import { LiveChatPage } from '../pages/live-chat/live-chat';

import { NativeStorage } from '@ionic-native/native-storage';

/*Services*/
import { WordpressService } from '../services/wordpress.service';
import { AuthenticationService } from '../services/authentication.service';

/*IonicPro*/
import { Pro } from '@ionic/pro';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

Pro.init('71141D58', {
  appVersion: '1.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    ForgetPasswordPage,
    EnterActivationCodePage,
    SmsVerificationPage,
    AddressDetailsPage, 
    TabsPage,
    SettingsPage,
    ProfilePage,
    DonationPage,
    DonationTabsPage,
    HomeTabsPage,
    ReadMorePage,
    ProgressBarComponent,
    SubmitDonationPage,
    HomeInfoPage,
    AboutUsPage,
    PrivacyPolicyPage,
    TermsAndConditionsPage,
    GetInTouchPage,
    LiveChatPage
  ],
  imports: [
    BrowserModule,
	LoginPageModule,
	SliderPageModule,
    IonicModule.forRoot(MyApp),
    ProgressBarModule,
    HttpModule,
    IonicStorageModule.forRoot({ 
      name: 'woocommerce_application', 
      driverOrder: ['sqlite', 'websql', 'indexeddb'] 
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SliderPage,
    LoginPage,
    RegisterPage,
    ForgetPasswordPage,
    EnterActivationCodePage,
    SmsVerificationPage,
    AddressDetailsPage, 
    TabsPage,
    SettingsPage,
    ProfilePage,
    DonationPage,
    DonationTabsPage,
    HomeTabsPage,
    ReadMorePage,
    SubmitDonationPage,
    HomeInfoPage,
    AboutUsPage,
    PrivacyPolicyPage,
    TermsAndConditionsPage,
    GetInTouchPage,
    LiveChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeVideoPlayer,
    NativeStorage,
    AuthenticationService,
    WordpressService,
    InAppBrowser,
	CallNumber,
	IonicErrorHandler,
        [{ provide: ErrorHandler, useClass: MyErrorHandler }]
  ]
})
export class AppModule {}
