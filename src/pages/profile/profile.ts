import $ from "jquery";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {
    profileTitle: boolean;
    addressTitle: boolean;
    donationTitle: boolean;
    headerProfile: boolean;
    donatedContainer: boolean;
    profileContent: boolean;

    public name: String = "";
    public email: String = "";
    public password: String = "";
    public conf: String = "";
	public wpname: String = "";
	public 

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events) {
        this.profileTitle = false;
        this.addressTitle = false;
        this.donationTitle = false;
        this.profileContent = false;
        this.headerProfile = true;
        this.donatedContainer = true;

        this.events.publish('user:profile');
		this.getUserID();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProfilePage');
		
    }

    profileBtn(){
        if(this.profileTitle == false){
            this.headerProfile = false;
            this.donatedContainer = false;
            this.profileTitle = true;
            this.profileContent = true;
            var degrees = 90;
            console.log("degrees: ", degrees);
            this.email = localStorage.getItem("email");
            this.name = localStorage.getItem("displayname");
            // $("#proficon").css({'-webkit-transform' : 'rotate('+ degrees +'deg) !important',
            //   '-moz-transform' : 'rotate('+ degrees +'deg) !important',
            //   '-ms-transform' : 'rotate('+ degrees +'deg) !important',
            //   'transform' : 'rotate('+ degrees +'deg) !important'});

            $("#proficon").css("transform", "rotate(90deg)");
        }else{
            this.headerProfile = true;
            this.donatedContainer = true;
            this.profileTitle = false;
            this.profileContent = false;
        }

    }
	
	getUserID(){
		 this.wpname = localStorage.getItem("displayname");
	 }
    addressBtn(){

    }
    donationBtn(){

    }
}
