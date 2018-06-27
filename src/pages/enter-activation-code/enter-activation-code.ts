import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the EnterActivationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter-activation-code',
  templateUrl: 'enter-activation-code.html',
})
export class EnterActivationCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false,"myMenu");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterActivationCodePage');
  }

  goToSignUp(){
  	this.navCtrl.push(RegisterPage);
  }
}
