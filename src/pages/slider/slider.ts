import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Slides } from 'ionic-angular';
import { ProgressBarModule } from "angular-progress-bar"

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})

export class SliderPage {
  @ViewChild(Slides) slides: Slides;
  splash: boolean;
  sliders: boolean;
  public slidesData: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  	this.menuCtrl.enable(false,'myMenu');
    this.splash = true;
    this.sliders = false;
    this.slidesData = [
      {
        BGcolor : '#fff',
        classContainer : 'slider-white-main',
        image : 'assets/imgs/lrc_logo.png',
        title : 'Welcome!',
        subTitleClass : 'sub-title-main',
        subTitle : 'Join us as a regular donor to help </b>the Lebanese Red Cross save more lives',
        loginContainer : false,
        subTitleClassWrapper: 'subtitle_wrapper1-main'
      },
      {
        BGcolor : '#cb2026',
        classContainer : 'slider-red',
        image : 'assets/imgs/slider2-logo.png',
        title : 'SIGN UP!',
        subTitle : 'Simply sign up and choose the amount you would like to donate every month.',
        subTitleClass : 'sub-title',
        loginContainer : false,
        subTitleClassWrapper: 'subtitle_wrapper2'
      },
      {
        BGcolor : '#fff',
        classContainer : 'slider-white ',
        image : 'assets/imgs/slider3-logo.png',
        title : 'Add Your Card!',
        subTitleClass : 'sub-title',
        subTitle : 'Securely add your card to make an automatic monthly donation to the Lebanese Red Cross',
        loginContainer : false,
        subTitleClassWrapper: 'subtitle_wrapper3',
        imgsizeClass: 'imgs3size'
      },
      {
        BGcolor : '#cb2026',
        classContainer : 'slider-red',
        image : 'assets/imgs/slider4-logo.png',
        title : 'Make a Difference Today!',
        subTitleClass : 'sub-title',
        subTitle : 'Even a small donation can help our ambulances reach patients faster!',
        loginContainer : true,
        subTitleClassWrapper: 'subtitle_wrapper4',
        imgsizeClass: 'imgs4size'

      }
    ];
    setTimeout(() => {
      this.splash = false;
      this.sliders = true;
    }, 5000);
  }
  /* Go to Sign In Page Trigger*/
  goToSignIn() {
    this.navCtrl.push(LoginPage);
  }
  /* Go to Register Page Function*/
  goToRegister(){
  	this.navCtrl.push(RegisterPage);
  }
  /* Skip Function */
  skip(){
    this.slides.slideTo(3, 500);
  }


}
