import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
   import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the GetInTouchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-in-touch',
  templateUrl: 'get-in-touch.html',
})
export class GetInTouchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetInTouchPage');
  }
phone(){
        this.callNumber.callNumber("+96170332255", true)
          .then(() => console.log('Launched dialer!'))
          .catch(() => console.log('Error launching dialer'));
           }
}
