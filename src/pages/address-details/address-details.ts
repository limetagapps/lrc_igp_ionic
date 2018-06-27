import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController, LoadingController} from 'ionic-angular';
import { HomeTabsPage } from '../home-tabs/home-tabs';
import { KAZA_PLACES, DISTRICT_PLACES, VILLAGE_PLACES } from '../../mocks/lebanon-places';


import { WordpressService } from '../../services/wordpress.service';


import { AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the AddressDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-details',
  templateUrl: 'address-details.html',
})
export class AddressDetailsPage {
  kazas = KAZA_PLACES;
  districts = DISTRICT_PLACES;
  villages = VILLAGE_PLACES;

  newUser: {};

  kasa: string  = "";
  district: string= "";
  village : string = "";
  streetnametxt : string = "";
  buildingtxt : string = "";
  streettxt : string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtrl: MenuController,
              public wordpressService: WordpressService,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {

    this.menuCtrl.enable(false,"myMenu");
    // console.log('VILLAGE: ', this.villages);
    this.newUser = [this.navParams.get('newUser')];
    console.log("name", " ", this.newUser[0].name);
  }

  /* Go to Home Page function */
  goToHome() {
    console.log(this.kasa);

    let loading = this.loadingCtrl.create({});
    loading.present();

    console.log(this.newUser[0].name, this.newUser[0].email, this.newUser[0].password, this.newUser[0].phone);
    this.wordpressService.registerUser(this.newUser[0].name, this.newUser[0].email, this.newUser[0].password, this.newUser[0].phone, this.kasa, this.district, this.village, this.streetnametxt, this.buildingtxt, this.streettxt)
      .subscribe(res => {
          loading.dismiss();
          //console.log("Res: ", JSON.stringify(res));
          const alert = this.alertCtrl.create({
            title: 'LRC IGP',
            subTitle: 'Registration successful, please login',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.push(LoginPage).then(() => {
            const index = this.navCtrl.getActive().index;
            this.navCtrl.remove(0, index);
          });
        },
        err => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: 'LRC IGP',
            subTitle: 'Error registering',
            buttons: ['OK']
          });
          alert.present();
          console.log("Error: ", JSON.stringify(err));
        });



  }

}
