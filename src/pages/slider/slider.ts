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
        classContainer : 'slider-white',
        image : 'assets/imgs/lrc_logo.png',
        title : 'Welcome!',
        subTitleClass : 'sub-title',
        subTitle : 'Join our individual Giving Program <b>and become a regular donor</b> for the Lebanese Red Cross',
        loginContainer : false,
        subTitleClassWrapper: 'subtitle_wrapper1'
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
        subTitle : 'Sucurely add your card and you will be charged automatically every month.',
        loginContainer : false,
        subTitleClassWrapper: 'subtitle_wrapper3',
        imgsizeClass: 'imgs3size'
      },
      {
        BGcolor : '#cb2026',
        classContainer : 'slider-red',
        image : 'assets/imgs/slider4-logo.png',
        title : 'Almost Done!',
        subTitleClass : 'sub-title',
        subTitle : 'Now sign up and become a regular donor for the Lebanese Red Cross!',
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
