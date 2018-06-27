import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController} from 'ionic-angular';

import { ForgetPasswordPage } from '../forget-password/forget-password';
import { HomeTabsPage } from '../home-tabs/home-tabs';
import { RegisterPage } from '../register/register';
import { AuthenticationService } from '../../services/authentication.service';
import {Observable} from "rxjs/Observable";
import {AddressDetailsPage} from "../address-details/address-details";

//import { NavController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usernametxt: string = "";
  password: string = "";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              //public loadingCtrl: LoadingController,
              private menuCtrl: MenuController,
              public authenticationService: AuthenticationService,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    this.menuCtrl.enable(false,'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  /* Sample Alert for wrong username/password */
  btnSignIn(){

//let loading = this.loadingCtrl.create();
    //  loading.present();
    let loading = this.loadingCtrl.create({});
    loading.present();

    this.authenticationService.doLogin(this.usernametxt, this.password)
      .subscribe(res => {

          var base64Url = res.json().token.split('.')[1];
          var base64 = base64Url.replace('-', '+').replace('_', '/');
          var jwt_data = JSON.parse(window.atob(base64));
          // localStorage.setItem("currentUserId", jwt_data.data.user.id);

          this.authenticationService.setUser({
            id: jwt_data.data.user.id,
            token: res.json().token,
            username: this.usernametxt,
            displayname: res.json().user_display_name,
            email: res.json().user_email
          });

          loading.dismiss();
          this.navCtrl.setRoot(HomeTabsPage);
        },
        err => {
          loading.dismiss();
          let alert = this.alertCtrl.create({

            title: 'SupportLRC',
            message: 'Your username or password are incorrect. <br /> please try again',
            cssClass: 'custom-alert-btn',
            buttons: [
              {
                text: 'Forget Password',
                role: 'cancel',
                handler: () => {
                  this.navCtrl.push(ForgetPasswordPage);
                }
              },
              {
                text: 'Login Now',
                handler: () => {
                  this.navCtrl.push(HomeTabsPage);
                  console.log('Buy clicked');
                }
              },
              {
                text: 'Cancel',
                handler: () => {
                  console.log('Buy clicked');
                }
              }
            ]
          });
          alert.present();
          console.log(err);
        })
  }
  /* Go to Sign Up Page */
  goToSignUp(){
    this.navCtrl.push(RegisterPage);
  }

  test(){
    // this.navCtrl.push(AddressDetailsPage);
  }


}
