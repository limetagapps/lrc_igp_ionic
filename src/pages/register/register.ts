import $ from "jquery";
import 'intl-tel-input';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SmsVerificationPage } from '../sms-verification/sms-verification';
import { COUNTRIES } from '../../mocks/country';


import { AlertController } from 'ionic-angular';
import {TermsAndConditionsPage} from "../terms-and-conditions/terms-and-conditions";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name: string = "";
  email: string = "";
  confirm: string = "";
  password: string = "";
  phone: string = "";

  countriesData: Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, public alertCtrl: AlertController) {
    /* Enable False (To hide the side nav) */
    this.menuCtrl.enable(false,'myMenu');
    this.countriesData = COUNTRIES;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    // console.log(this.countriesData);


    $("#phone").intlTelInput({
      defaultCountry: "LB",
      initialCountry: 'lb',
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // hiddenInput: "full_number",
      // initialCountry: "auto",
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
      // separateDialCode: true,
      utilsScript: "assets/js/utils.js"
    });

  }

  /* Submit Sign up Function */
  btnSignUp() {

    var intlNumber = $("#phone").intlTelInput("getNumber"); // get full number eg +17024181234
    var countryData = $("#phone").intlTelInput("getSelectedCountryData"); // get country data as obj

    var countryCode = countryData.dialCode; // using updated doc, code has been replaced with dialCode
    countryCode = "+" + countryCode; // convert 1 to +1

    var newNo = intlNumber.replace(countryCode, "" + countryCode+ "" );

    //console.log(this.name, " ", newNo, " ", this.password, " ", this.confirm, this.email);
    if (this.password === this.confirm) {
      if(this.name.length > 0 && this.phone.length > 0 && this.email.length > 0) {
        let newUser = {
          "name": this.name,
          "phone": newNo,
          "password": this.password,
          "email": this.email
        };
        this.navCtrl.push(SmsVerificationPage, {newUser});
      }
      else{
        const alert = this.alertCtrl.create({
          title: 'LRC IGP',
          subTitle: 'Please fill all the fields!',
          buttons: ['OK']
        });
        alert.present();
      }
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'LRC IGP',
        subTitle: 'Please confirm your password!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  goToTerms(){
      this.navCtrl.push(TermsAndConditionsPage);
    }
}
