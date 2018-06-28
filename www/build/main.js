webpackJsonp([21],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_lebanon_places__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddressDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressDetailsPage = /** @class */ (function () {
    function AddressDetailsPage(navCtrl, navParams, menuCtrl, wordpressService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.wordpressService = wordpressService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.kazas = __WEBPACK_IMPORTED_MODULE_2__mocks_lebanon_places__["b" /* KAZA_PLACES */];
        this.districts = __WEBPACK_IMPORTED_MODULE_2__mocks_lebanon_places__["a" /* DISTRICT_PLACES */];
        this.villages = __WEBPACK_IMPORTED_MODULE_2__mocks_lebanon_places__["c" /* VILLAGE_PLACES */];
        this.kasa = "";
        this.district = "";
        this.village = "";
        this.streetnametxt = "";
        this.buildingtxt = "";
        this.streettxt = "";
        this.menuCtrl.enable(false, "myMenu");
        // console.log('VILLAGE: ', this.villages);
        this.newUser = [this.navParams.get('newUser')];
        console.log("name", " ", this.newUser[0].name);
    }
    /* Go to Home Page function */
    AddressDetailsPage.prototype.goToHome = function () {
        var _this = this;
        console.log(this.kasa);
        var loading = this.loadingCtrl.create({});
        loading.present();
        console.log(this.newUser[0].name, this.newUser[0].email, this.newUser[0].password, this.newUser[0].phone);
        this.wordpressService.registerUser(this.newUser[0].name, this.newUser[0].email, this.newUser[0].password, this.newUser[0].phone, this.kasa, this.district, this.village, this.streetnametxt, this.buildingtxt, this.streettxt)
            .subscribe(function (res) {
            loading.dismiss();
            //console.log("Res: ", JSON.stringify(res));
            var alert = _this.alertCtrl.create({
                title: 'LRC IGP',
                subTitle: 'Registration successful, please login',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]).then(function () {
                var index = _this.navCtrl.getActive().index;
                _this.navCtrl.remove(0, index);
            });
        }, function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'LRC IGP',
                subTitle: 'Error registering',
                buttons: ['OK']
            });
            alert.present();
            console.log("Error: ", JSON.stringify(err));
        });
    };
    AddressDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address-details',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/address-details/address-details.html"*/'<!--\n  Generated template for the AddressDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="redbg">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #cb2026">\n	<div class="address-details-container">\n		<div class="col-title">\n			<h2>Congrats!</h2>\n			<p class="verified">\n				Your account has been <strong>verified!</strong>\n			</p>\n			<p class="note" style="    margin-top: 6%;">\n				Please enter your address details\n			</p>\n		</div>\n\n	  	<ion-item class="item-sel">\n		  <ion-label class="select-lbl">Kaza</ion-label>\n		  <ion-select [(ngModel)]="kasa" class="sel-ion">\n		    <ion-option *ngFor="let kaza of kazas">{{ kaza.kaza }}</ion-option>\n		  </ion-select>\n		</ion-item>\n\n	  	<ion-item class="item-sel">\n		  <ion-label class="select-lbl">District</ion-label>\n		  <ion-select [(ngModel)]="district" class="sel-ion">\n		    <ion-option *ngFor="let district of districts">{{ district.district }}</ion-option>\n		  </ion-select>\n		</ion-item>\n\n		<ion-item class="item-sel">\n		  <ion-label class="select-lbl">Village</ion-label>\n		  <ion-select [(ngModel)]="village" class="sel-ion">\n		    <ion-option *ngFor="let village of villages">{{ village.village }}</ion-option>\n		  </ion-select>\n		</ion-item>\n\n\n    <ion-input class="custom-input" type="text" [(ngModel)]="streetnametxt" placeholder="Street name or No."></ion-input>\n\n\n\n\n    <ion-input class="custom-input" type="text" [(ngModel)]="buildingtxt" placeholder="Building Name or No"></ion-input>\n\n\n\n\n    <ion-input class="custom-input" type="text" [(ngModel)]="streettxt" placeholder="Street"></ion-input>\n\n\n		<!-- Go to Sign In Page -->\n		<button style="    width: 100%;\n    margin: auto;\n    margin-top: 7%;\n    margin-bottom:20%;\n}" ion-button block class="btn-done cos-button" color="redbg" (click)="goToHome()"> DONE </button>\n    <!-- Skip Trigger Button -->\n    <p class="skip" text-right (click)="goToHome()">SKIP  ></p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/address-details/address-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__["a" /* WordpressService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AddressDetailsPage);
    return AddressDetailsPage;
}());

//# sourceMappingURL=address-details.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enter_activation_code_enter_activation_code__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPasswordPage = /** @class */ (function () {
    function ForgetPasswordPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, "myMenu");
    }
    ForgetPasswordPage.prototype.goToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    ForgetPasswordPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__enter_activation_code_enter_activation_code__["a" /* EnterActivationCodePage */]);
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/forget-password/forget-password.html"*/'<!--\n  Generated template for the ForgetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border >\n\n  <ion-navbar class="nav-red" color="whitebg">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="forget-pw-container">\n		<h4>Forgot Password?</h4>\n		<p>Enter your registered email to receive a reset link</p>\n		<ion-item>\n			<ion-label floating> Your Email </ion-label>\n		    <ion-input  type="text" ></ion-input>\n		</ion-item>\n    <div class="lower-container">\n		<button ion-button block color="redbg" class="cos-button reset-btn" (click)="goToResetPassword()">Reset Password</button>\n    </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/forget-password/forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_details_address_details__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SmsVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SmsVerificationPage = /** @class */ (function () {
    function SmsVerificationPage(navCtrl, navParams, menuCtrl, wordpressService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.wordpressService = wordpressService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.codetxt = "";
        this.menuCtrl.enable(false, "myMenu");
        this.newUser = [this.navParams.get('newUser')];
        console.log("name", " ", this.newUser[0].name);
    }
    SmsVerificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SmsVerificationPage');
        this.wordpressService.getPhoneCode(this.newUser[0].phone)
            .subscribe(function (res) {
            //console.log("Res: ", JSON.stringify(res));
            _this.code = res.code;
            console.log("RECEIVED_CODE: ", _this.code);
        }, function (err) {
            console.log("Error: ", JSON.stringify(err));
        });
    };
    SmsVerificationPage.prototype.ionViewWillEnter = function () {
        // $.get( "https://supportlrc.app/verify/sms.php?phone="+this.newUser[0].phone, function( data ) {
        //
        //   console.log(data);
        //
        // });
    };
    SmsVerificationPage.prototype.resendCode = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        this.code = "";
        this.wordpressService.getPhoneCode(this.newUser[0].phone)
            .subscribe(function (res) {
            //console.log("Res: ", JSON.stringify(res));
            _this.code = res.code;
            console.log("RECEIVED_CODE: ", _this.code);
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'LRC IGP',
                subTitle: 'A new code has been sent via sms! Please check it',
                buttons: ['OK']
            });
            alert.present();
        }, function (err) {
            console.log("Error: ", JSON.stringify(err));
        });
    };
    SmsVerificationPage.prototype.addressDetails = function () {
        console.log(this.code, " ", this.codetxt);
        if (this.code == this.codetxt) {
            var newUser = {
                "name": this.newUser[0].name,
                "phone": this.newUser[0].phone,
                "password": this.newUser[0].password,
                "email": this.newUser[0].email
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_details_address_details__["a" /* AddressDetailsPage */], { newUser: newUser });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'LRC IGP',
                subTitle: 'Please paste the code received by SMS!',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    SmsVerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sms-verification',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/sms-verification/sms-verification.html"*/'<!--\n  Generated template for the SmsVerificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar class="nav-red" color="whitebg">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="sms-verification-container">\n		<h4>SMS Verification</h4>\n		<div class="sms_wrapper">\n		<p>\n			To verify your account, please enter the activation code you received by SMS\n		</p>\n		</div>\n		<ion-item>\n			<ion-label floating>CODE</ion-label>\n		    <ion-input class="code" type="number" [(ngModel)]="codetxt"></ion-input>\n		</ion-item>\n		<button ion-button class="resend-btn cos-button"><ion-icon ios="ios-refresh" class="m-r" md="md-refresh" (click)="resendCode()"></ion-icon> Resend code</button>\n	</div>\n	<div class="lower-container">\n		<button ion-button block color="redbg" class="reset-pass-btn cos-button" (click)="addressDetails()">VERIFY</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/sms-verification/sms-verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__["a" /* WordpressService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SmsVerificationPage);
    return SmsVerificationPage;
}());

//# sourceMappingURL=sms-verification.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterActivationCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EnterActivationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnterActivationCodePage = /** @class */ (function () {
    function EnterActivationCodePage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, "myMenu");
    }
    EnterActivationCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnterActivationCodePage');
    };
    EnterActivationCodePage.prototype.goToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    EnterActivationCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enter-activation-code',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/enter-activation-code/enter-activation-code.html"*/'<!--\n  Generated template for the EnterActivationCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar class="nav-red" color="whitebg">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="enter-activation-code-container">\n		<h4>Reset Password </h4>\n		<p>\n			Enter the token you received by email and then enter your new password\n		</p>\n		<ion-item class="code">\n			<ion-label floating>TOKEN</ion-label>\n		    <ion-input type="text" ></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>New Password</ion-label>\n		    <ion-input type="password"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Re-enter New Password</ion-label>\n		    <ion-input type="password"></ion-input>\n		</ion-item>\n    <div class="lower-container">\n		<button ion-button block color="redbg">Change Password</button>\n    </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/enter-activation-code/enter-activation-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], EnterActivationCodePage);
    return EnterActivationCodePage;
}());

//# sourceMappingURL=enter-activation-code.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReadMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReadMorePage = /** @class */ (function () {
    function ReadMorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slide = [this.navParams.get('slide')];
        console.log(this.slide);
        this.slide[0].subBGImage = this.slide[0].subBGImage.replace('url(', '');
        this.slide[0].subBGImage = this.slide[0].subBGImage.replace(')', '');
    }
    ReadMorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReadMorePage');
    };
    ReadMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-read-more',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/read-more/read-more.html"*/'<!--\n  Generated template for the ReadMorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="redbg">\n    <ion-title>Article</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<section *ngFor="let s of slide;">\n	 <ion-grid>\n            <ion-row>\n              <ion-col col-12>	\n\n		<img [src]="s.subBGImage" height="200" style="width: 100%;\n    height: 60%">\n		<div class="content-information-container">\n		  <p class="title">{{ s.author }}</p>\n		  <h4>{{ s.title }}</h4>\n		  <p class="details">\n		  	{{ s.description1 }}\n		  </p>\n		  <br />\n		  <br />\n		  <p class="details">\n		  	{{ s.description2 }}\n		  </p>\n		</div>\n\n			 </ion-col>\n	 \n	 	</ion-row>\n	 </ion-grid>			\n	</section>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/read-more/read-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ReadMorePage);
    return ReadMorePage;
}());

//# sourceMappingURL=read-more.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/about-us/about-us.html"*/'<!--\n  Generated template for the AboutUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar color="redbg">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetInTouchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GetInTouchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetInTouchPage = /** @class */ (function () {
    function GetInTouchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GetInTouchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetInTouchPage');
    };
    GetInTouchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-get-in-touch',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/get-in-touch/get-in-touch.html"*/'<!--\n  Generated template for the GetInTouchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>get-in-touch</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/get-in-touch/get-in-touch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], GetInTouchPage);
    return GetInTouchPage;
}());

//# sourceMappingURL=get-in-touch.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LiveChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LiveChatPage = /** @class */ (function () {
    function LiveChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LiveChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LiveChatPage');
    };
    LiveChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-live-chat',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/live-chat/live-chat.html"*/'<!--\n  Generated template for the LiveChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>live-chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/live-chat/live-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LiveChatPage);
    return LiveChatPage;
}());

//# sourceMappingURL=live-chat.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PrivacyPolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(navCtrl, navParams, wordpressService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordpressService = wordpressService;
    }
    PrivacyPolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPolicyPage');
    };
    PrivacyPolicyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("entering");
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(this.wordpressService.getPrivacy())
            .subscribe(function (data) {
            _this.posts = data[0].content.rendered;
            //this.posts.forEach( p => {
            _this.description1 = _this.posts;
            //});
        });
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacy-policy',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/privacy-policy/privacy-policy.html"*/'<!--\n  Generated template for the PrivacyPolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar color="redbg">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p [innerHTML]=description1>\n    \n  </p>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/privacy-policy/privacy-policy.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__["a" /* WordpressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__["a" /* WordpressService */]) === "function" && _c || Object])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SliderPage = /** @class */ (function () {
    function SliderPage(navCtrl, navParams, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, 'myMenu');
        this.splash = true;
        this.sliders = false;
        this.slidesData = [
            {
                BGcolor: '#fff',
                classContainer: 'slider-white',
                image: 'assets/imgs/lrc_logo.png',
                title: 'Welcome!',
                subTitleClass: 'sub-title',
                subTitle: 'Join our individual Giving Program <b>and become a regular donor</b> for the Lebanese Red Cross',
                loginContainer: false,
                subTitleClassWrapper: 'subtitle_wrapper1'
            },
            {
                BGcolor: '#cb2026',
                classContainer: 'slider-red',
                image: 'assets/imgs/slider2-logo.png',
                title: 'SIGN UP!',
                subTitle: 'Simply sign up and choose the amount you would like to donate every month.',
                subTitleClass: 'sub-title',
                loginContainer: false,
                subTitleClassWrapper: 'subtitle_wrapper2'
            },
            {
                BGcolor: '#fff',
                classContainer: 'slider-white ',
                image: 'assets/imgs/slider3-logo.png',
                title: 'Add Your Card!',
                subTitleClass: 'sub-title',
                subTitle: 'Sucurely add your card and you will be charged automatically every month.',
                loginContainer: false,
                subTitleClassWrapper: 'subtitle_wrapper3',
                imgsizeClass: 'imgs3size'
            },
            {
                BGcolor: '#cb2026',
                classContainer: 'slider-red',
                image: 'assets/imgs/slider4-logo.png',
                title: 'Almost Done!',
                subTitleClass: 'sub-title',
                subTitle: 'Now sign up and become a regular donor for the Lebanese Red Cross!',
                loginContainer: true,
                subTitleClassWrapper: 'subtitle_wrapper4',
                imgsizeClass: 'imgs4size'
            }
        ];
        setTimeout(function () {
            _this.splash = false;
            _this.sliders = true;
        }, 5000);
    }
    /* Go to Sign In Page Trigger*/
    SliderPage.prototype.goToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    /* Go to Register Page Function*/
    SliderPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    /* Skip Function */
    SliderPage.prototype.skip = function () {
        this.slides.slideTo(3, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], SliderPage.prototype, "slides", void 0);
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/slider/slider.html"*/'<!--\n  Generated template for the SliderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<meta name="viewport" content="initial-scale=1, width=device-width, height=device-height, user-scalable=no, viewport-fit=cover">\n\n<ion-content no-border >\n\n\n	<ion-slides pager="false" *ngIf="splash">\n		<ion-slide class="splash">\n			<img src="assets/imgs/lrc_logo.png">\n		  	<div class="faded-background"></div>\n		  	<div class="footer-text">\n		  		<div class="footer-content">\n			  		<div class="title">\n			  			<h1>Lebanese Red Cross</h1>\n			  		</div>\n			  		<div class="sub-title">\n				  		<p class="individual-giving">Individual Giving Program</p>\n				  		<p class="support-LRC">#SupportLRC</p>\n			  		</div>\n		  		</div>\n			  	<progress class="loader" max="100" value="0">\n			  	</progress>\n		  	</div>\n		</ion-slide>\n	</ion-slides>\n\n	<ion-slides *ngIf="sliders" pager>\n		<ion-slide *ngFor="let slideData of slidesData" [style.backgroundColor]="slideData.BGcolor">\n		    <div class="{{ slideData.classContainer }}">\n		    	<img [class]="slideData.imgsizeClass ? slideData.imgsizeClass : \'\'"  src="{{ slideData.image }}">\n		    	<h2 >{{ slideData.title }}</h2>\n		    	<div  [class]="slideData.subTitleClassWrapper" >\n		    	<p [class]="slideData.subTitleClass" [innerHtml]="slideData.subTitle" style="margin-bottom: 30px">	</p>\n		    	</div>\n\n		    	<div *ngIf="slideData.loginContainer" class="s-container">\n		    		<div class="s-e si-container" (click)="goToSignIn()">\n		    			<p class="si">Sign in</p>\n		    		</div>\n		    		<span class="vertical"></span>\n		    		<div class="s-e su-container" (click)="goToRegister()">\n		    			<p class="su">Sign up</p>\n		    		</div>\n		    	</div>\n		    	<!-- Skip Trigger Button - Move to the last slide -->\n	    		<!-- <p *ngIf="!slideData.loginContainer" text-right class="skip" (click)="skip()">SKIP</p> -->\n	    			<p *ngIf="!slideData.loginContainer" (click)="skip()" style="\n						    position: absolute;\n						    z-index: 3;\n						    right: 8%;\n						    bottom: 1%;\n						    width: 35px;\n						    height: 20px;\n						    color: #4a4a4a;\n						    font-family: Roboto;\n						    font-size: 15px;\n						    font-style: normal;\n						    font-stretch: normal;\n						    font-weight: 400;\n						    text-align: center;\n						"> SKIP </p>\n		    </div>\n		</ion-slide>\n	</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/slider/slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		315,
		20
	],
	"../pages/address-details/address-details.module": [
		314,
		19
	],
	"../pages/donation-tabs/donation-tabs.module": [
		317,
		18
	],
	"../pages/donation/donation.module": [
		316,
		17
	],
	"../pages/enter-activation-code/enter-activation-code.module": [
		318,
		16
	],
	"../pages/forget-password/forget-password.module": [
		319,
		15
	],
	"../pages/get-in-touch/get-in-touch.module": [
		320,
		14
	],
	"../pages/home-info/home-info.module": [
		321,
		13
	],
	"../pages/home-tabs/home-tabs.module": [
		322,
		12
	],
	"../pages/live-chat/live-chat.module": [
		323,
		11
	],
	"../pages/login/login.module": [
		324,
		10
	],
	"../pages/privacy-policy/privacy-policy.module": [
		325,
		9
	],
	"../pages/profile/profile.module": [
		326,
		8
	],
	"../pages/read-more/read-more.module": [
		327,
		7
	],
	"../pages/register/register.module": [
		328,
		6
	],
	"../pages/settings/settings.module": [
		329,
		5
	],
	"../pages/slider/slider.module": [
		330,
		4
	],
	"../pages/sms-verification/sms-verification.module": [
		331,
		3
	],
	"../pages/submit-donation/submit-donation.module": [
		332,
		2
	],
	"../pages/tabs/tabs.module": [
		333,
		1
	],
	"../pages/terms-and-conditions/terms-and-conditions.module": [
		334,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WORDPRESS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORDPRESS_REST_API_URL; });
//config constants
var WORDPRESS_URL = 'https://supportlrc.app/'; // 'http://54.93.99.219/wordpress/';
var WORDPRESS_REST_API_URL = WORDPRESS_URL + 'wp-json/wp/v2/';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__donation_donation__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DonationTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonationTabsPage = /** @class */ (function () {
    function DonationTabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab0Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__donation_donation__["a" /* DonationPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.myIndex = navParams.data.tabIndex || 0;
        var a = this.navCtrl.getActive().component;
        var donationStatus = navParams.get('data');
        this.donationBtn = false;
        if (donationStatus) {
            this.donationBtn = true;
        }
    }
    DonationTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonationTabsPage');
    };
    DonationTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donation-tabs',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/donation-tabs/donation-tabs.html"*/'<ion-tabs [selectedIndex]="1">\n	<ion-fab class="hide-fab" bottom center (click)="donationPage()">\n	    <div ion-fab class="round-button"> \n		    DONATE\n		</div>\n		<ion-icon ios="ios-card" md="md-card"></ion-icon>\n	</ion-fab>\n  <ion-tab tabIcon="person" [root]="tab0Root"></ion-tab> \n  <ion-tab [root]="tab1Root"></ion-tab>\n  <ion-tab tabIcon="settings" [root]="tab2Root"></ion-tab>\n</ion-tabs>  '/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/donation-tabs/donation-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DonationTabsPage);
    return DonationTabsPage;
}());

//# sourceMappingURL=donation-tabs.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HomeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeInfoPage = /** @class */ (function () {
    function HomeInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab0Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.myIndex = navParams.data.tabIndex || 0;
    }
    HomeInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeInfoPage');
    };
    HomeInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-info',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/home-info/home-info.html"*/'<ion-tabs [selectedIndex]="1"> \n	<ion-fab bottom center (click)="donationPage()">\n	    <div ion-fab class="round-button"> \n		    DONATE\n		</div>\n		<ion-icon ios="ios-card" md="md-card"></ion-icon>\n	</ion-fab>\n  <ion-tab tabIcon="person" [root]="tab0Root"></ion-tab>\n  <ion-tab [root]="tab1Root"></ion-tab>\n  <ion-tab tabIcon="settings" [root]="tab2Root"></ion-tab>\n</ion-tabs>  '/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/home-info/home-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HomeInfoPage);
    return HomeInfoPage;
}());

//# sourceMappingURL=home-info.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitDonationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SubmitDonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubmitDonationPage = /** @class */ (function () {
    function SubmitDonationPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, 'myMenu');
        this.donation = this.navParams.get('donation');
    }
    SubmitDonationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmitDonationPage');
    };
    SubmitDonationPage.prototype.playBtn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__["a" /* HomeTabsPage */], { root2: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], data: true });
    };
    SubmitDonationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submit-donation',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/submit-donation/submit-donation.html"*/'<!--\n  Generated template for the SubmitDonationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n    background-color: gray;\n    border: 1px solid;\n-->\n\n\n<ion-content>\n	<div class="header-content">\n		<img src="assets/imgs/lrc_logo.png">\n		<h2> LEBANESE RED CROSS </h2>\n		<h2> {{ donation.value }} USD </h2>\n	</div>\n	<div class="main-conente">\n		<ion-grid>\n		  <ion-row>\n		    <ion-col col-12>\n		     <p>CARD NUMBER</p>\n		     <strong>4055 01** **** 0001</strong>\n		    </ion-col>\n		  </ion-row>\n		  <ion-row>\n		  	<ion-col col-6>\n		     <p>MM/YY</p>\n		     <strong>02/22</strong>\n		    </ion-col>\n		    <ion-col col-6>\n		     <p>CVV</p>\n		     <strong>123</strong>\n		    </ion-col>\n		  </ion-row>\n		  <ion-row>\n		  	<ion-col col-12>\n		     <p>CARD NUMBER NAME</p>\n		     <strong>SARAH KETTANEH</strong>\n		    </ion-col>\n		  </ion-row>\n		</ion-grid>\n	</div>\n	<ion-footer> \n		<button position="bottom" class="pay-btn" ion-button block color="redbg" (click)="playBtn()">PAY</button>\n	</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/submit-donation/submit-donation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], SubmitDonationPage);
    return SubmitDonationPage;
}());

//# sourceMappingURL=submit-donation.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__donation_donation__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab0Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.donationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__donation_donation__["a" /* DonationPage */]);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="1"> \n	<ion-fab bottom center (click)="donationPage()">\n	    <div ion-fab class="round-button"> \n		    Donate\n		</div>\n		<ion-icon ios="ios-card" md="md-card"></ion-icon>\n	</ion-fab>\n  <ion-tab tabIcon="person" [root]="tab0Root"></ion-tab>\n  <ion-tab [root]="tab1Root"></ion-tab>\n  <ion-tab tabIcon="settings" [root]="tab2Root"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_progress_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_slider_slider__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forget_password_forget_password__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_enter_activation_code_enter_activation_code__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sms_verification_sms_verification__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_address_details_address_details__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_donation_donation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_donation_tabs_donation_tabs__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_home_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_read_more_read_more__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_progress_bar_progress_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_submit_donation_submit_donation__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_home_info_home_info__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_about_us_about_us__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_privacy_policy_privacy_policy__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_get_in_touch_get_in_touch__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_live_chat_live_chat__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_native_storage__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_wordpress_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_authentication_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























/* Menu Pages */






/*Services*/


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_enter_activation_code_enter_activation_code__["a" /* EnterActivationCodePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sms_verification_sms_verification__["a" /* SmsVerificationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_address_details_address_details__["a" /* AddressDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_donation_donation__["a" /* DonationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_donation_tabs_donation_tabs__["a" /* DonationTabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_read_more_read_more__["a" /* ReadMorePage */],
                __WEBPACK_IMPORTED_MODULE_25__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_submit_donation_submit_donation__["a" /* SubmitDonationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_home_info_home_info__["a" /* HomeInfoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_get_in_touch_get_in_touch__["a" /* GetInTouchPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_live_chat_live_chat__["a" /* LiveChatPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/address-details/address-details.module#AddressDetailsPageModule', name: 'AddressDetailsPage', segment: 'address-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation/donation.module#DonationPageModule', name: 'DonationPage', segment: 'donation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation-tabs/donation-tabs.module#DonationTabsPageModule', name: 'DonationTabsPage', segment: 'donation-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enter-activation-code/enter-activation-code.module#EnterActivationCodePageModule', name: 'EnterActivationCodePage', segment: 'enter-activation-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/get-in-touch/get-in-touch.module#GetInTouchPageModule', name: 'GetInTouchPage', segment: 'get-in-touch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-info/home-info.module#HomeInfoPageModule', name: 'HomeInfoPage', segment: 'home-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/home-tabs.module#HomeTabsPageModule', name: 'HomeTabsPage', segment: 'home-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/live-chat/live-chat.module#LiveChatPageModule', name: 'LiveChatPage', segment: 'live-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule', name: 'PrivacyPolicyPage', segment: 'privacy-policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/read-more/read-more.module#ReadMorePageModule', name: 'ReadMorePage', segment: 'read-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slider/slider.module#SliderPageModule', name: 'SliderPage', segment: 'slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sms-verification/sms-verification.module#SmsVerificationPageModule', name: 'SmsVerificationPage', segment: 'sms-verification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/submit-donation/submit-donation.module#SubmitDonationPageModule', name: 'SubmitDonationPage', segment: 'submit-donation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule', name: 'TermsAndConditionsPage', segment: 'terms-and-conditions', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4_angular_progress_bar__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'woocommerce_application',
                    driverOrder: ['sqlite', 'websql', 'indexeddb']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_enter_activation_code_enter_activation_code__["a" /* EnterActivationCodePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sms_verification_sms_verification__["a" /* SmsVerificationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_address_details_address_details__["a" /* AddressDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_donation_donation__["a" /* DonationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_donation_tabs_donation_tabs__["a" /* DonationTabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_read_more_read_more__["a" /* ReadMorePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_submit_donation_submit_donation__["a" /* SubmitDonationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_home_info_home_info__["a" /* HomeInfoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_get_in_touch_get_in_touch__["a" /* GetInTouchPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_live_chat_live_chat__["a" /* LiveChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_37__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_36__services_wordpress_service__["a" /* WordpressService */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KAZA_PLACES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISTRICT_PLACES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VILLAGE_PLACES; });
var KAZA_PLACES = [
    {
        kaza: 'Akkar Governorate'
    },
    {
        kaza: 'Baalbek-Hermel Governorate'
    },
    {
        kaza: 'Beirut Governorate'
    },
    {
        kaza: 'Mount Lebanon Governorate'
    },
    {
        kaza: 'North Governorate'
    },
    {
        kaza: 'Beqaa Governorate'
    },
    {
        kaza: 'South Governorate'
    },
    {
        kaza: 'Nabatieh Governorate'
    },
];
var DISTRICT_PLACES = [
    {
        district: 'Akkar'
    },
    {
        district: 'Baalbek'
    },
    {
        district: 'Hermel'
    },
    {
        district: 'Beirut'
    },
    {
        district: 'Aley'
    },
    {
        district: 'Baabda'
    },
    {
        district: 'Chouf'
    },
    {
        district: 'Jbeil'
    },
    {
        district: 'Keserwan'
    },
    {
        district: 'Matn'
    },
    {
        district: 'Batroun'
    },
    {
        district: 'Bsharri'
    },
    {
        district: 'Koura'
    },
    {
        district: 'Miniyeh-Danniyeh'
    },
    {
        district: 'Tripoli'
    },
    {
        district: 'Zgharta'
    },
    {
        district: 'Rashaya'
    },
    {
        district: 'Western Beqaa'
    },
    {
        district: 'Zahlé'
    },
    {
        district: 'Jezzine'
    },
    {
        district: 'Sidon'
    },
    {
        district: 'Tyre'
    },
    {
        district: 'Bint Jbeil'
    },
    {
        district: 'Hasbaya'
    },
    {
        district: 'Marjeyoun'
    },
    {
        district: 'Nabatieh'
    },
];
var VILLAGE_PLACES = [
    {
        village: 'Al Qamamin'
    },
    {
        village: 'Andaket'
    },
    {
        village: 'Arida, Lebanon'
    },
    {
        village: 'Arqa'
    },
    {
        village: 'Aydamun'
    },
    {
        village: 'Bebnine'
    },
    {
        village: 'Berkayel'
    },
    {
        village: 'Bireh, Akkar'
    },
    {
        village: 'Chadra, Lebanon'
    },
    {
        village: 'Charbila'
    },
    {
        village: 'Cheikh Mohammad '
    },
    {
        village: 'Chittaha, Lebanon'
    },
    {
        village: 'Denbo'
    },
    {
        village: 'Fnaydeq'
    },
    {
        village: 'Halba, Lebanon'
    },
    {
        village: 'El Hed '
    },
    {
        village: 'Hisah'
    },
    {
        village: 'Kobayat'
    },
    {
        village: 'Kouachra'
    },
    {
        village: 'Massoudieh'
    },
    {
        village: 'Miniara'
    },
    {
        village: 'Mish Mish '
    },
    {
        village: 'Qaabrîne'
    },
    {
        village: 'Qabeit'
    },
    {
        village: 'Qarha, Akkar District'
    },
    {
        village: 'Rahbeh'
    },
    {
        village: 'Zawarib'
    },
];
//# sourceMappingURL=lebanon-places.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COUNTRIES; });
var COUNTRIES = [
    {
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Aland Islands",
        "dial_code": "+358",
        "code": "AX"
    },
    {
        "name": "Albania",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "dial_code": "+213",
        "code": "DZ"
    },
    {
        "name": "AmericanSamoa",
        "dial_code": "+1684",
        "code": "AS"
    },
    {
        "name": "Andorra",
        "dial_code": "+376",
        "code": "AD"
    },
    {
        "name": "Angola",
        "dial_code": "+244",
        "code": "AO"
    },
    {
        "name": "Anguilla",
        "dial_code": "+1264",
        "code": "AI"
    },
    {
        "name": "Antarctica",
        "dial_code": "+672",
        "code": "AQ"
    },
    {
        "name": "Antigua and Barbuda",
        "dial_code": "+1268",
        "code": "AG"
    },
    {
        "name": "Argentina",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "Armenia",
        "dial_code": "+374",
        "code": "AM"
    },
    {
        "name": "Aruba",
        "dial_code": "+297",
        "code": "AW"
    },
    {
        "name": "Australia",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "Austria",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "dial_code": "+1242",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "dial_code": "+880",
        "code": "BD"
    },
    {
        "name": "Barbados",
        "dial_code": "+1246",
        "code": "BB"
    },
    {
        "name": "Belarus",
        "dial_code": "+375",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "dial_code": "+32",
        "code": "BE"
    },
    {
        "name": "Belize",
        "dial_code": "+501",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "dial_code": "+229",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "dial_code": "+1441",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "Brazil",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "dial_code": "+246",
        "code": "IO"
    },
    {
        "name": "Brunei Darussalam",
        "dial_code": "+673",
        "code": "BN"
    },
    {
        "name": "Bulgaria",
        "dial_code": "+359",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "dial_code": "+226",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "dial_code": "+237",
        "code": "CM"
    },
    {
        "name": "Canada",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "dial_code": "+238",
        "code": "CV"
    },
    {
        "name": "Cayman Islands",
        "dial_code": "+ 345",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "dial_code": "+236",
        "code": "CF"
    },
    {
        "name": "Chad",
        "dial_code": "+235",
        "code": "TD"
    },
    {
        "name": "Chile",
        "dial_code": "+56",
        "code": "CL"
    },
    {
        "name": "China",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "dial_code": "+61",
        "code": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "dial_code": "+61",
        "code": "CC"
    },
    {
        "name": "Colombia",
        "dial_code": "+57",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "dial_code": "+269",
        "code": "KM"
    },
    {
        "name": "Congo",
        "dial_code": "+242",
        "code": "CG"
    },
    {
        "name": "Congo, The Democratic Republic of the Congo",
        "dial_code": "+243",
        "code": "CD"
    },
    {
        "name": "Cook Islands",
        "dial_code": "+682",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "dial_code": "+506",
        "code": "CR"
    },
    {
        "name": "Cote d'Ivoire",
        "dial_code": "+225",
        "code": "CI"
    },
    {
        "name": "Croatia",
        "dial_code": "+385",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "dial_code": "+53",
        "code": "CU"
    },
    {
        "name": "Cyprus",
        "dial_code": "+357",
        "code": "CY"
    },
    {
        "name": "Czech Republic",
        "dial_code": "+420",
        "code": "CZ"
    },
    {
        "name": "Denmark",
        "dial_code": "+45",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "dial_code": "+253",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "dial_code": "+1767",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "dial_code": "+1849",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "dial_code": "+593",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "dial_code": "+20",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "dial_code": "+503",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "dial_code": "+240",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "dial_code": "+291",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "dial_code": "+372",
        "code": "EE"
    },
    {
        "name": "Ethiopia",
        "dial_code": "+251",
        "code": "ET"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "dial_code": "+500",
        "code": "FK"
    },
    {
        "name": "Faroe Islands",
        "dial_code": "+298",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "dial_code": "+679",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "dial_code": "+358",
        "code": "FI"
    },
    {
        "name": "France",
        "dial_code": "+33",
        "code": "FR"
    },
    {
        "name": "French Guiana",
        "dial_code": "+594",
        "code": "GF"
    },
    {
        "name": "French Polynesia",
        "dial_code": "+689",
        "code": "PF"
    },
    {
        "name": "Gabon",
        "dial_code": "+241",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "dial_code": "+220",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "dial_code": "+995",
        "code": "GE"
    },
    {
        "name": "Germany",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "dial_code": "+233",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "dial_code": "+350",
        "code": "GI"
    },
    {
        "name": "Greece",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "dial_code": "+1473",
        "code": "GD"
    },
    {
        "name": "Guadeloupe",
        "dial_code": "+590",
        "code": "GP"
    },
    {
        "name": "Guam",
        "dial_code": "+1671",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "dial_code": "+502",
        "code": "GT"
    },
    {
        "name": "Guernsey",
        "dial_code": "+44",
        "code": "GG"
    },
    {
        "name": "Guinea",
        "dial_code": "+224",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "dial_code": "+245",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "dial_code": "+595",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "dial_code": "+509",
        "code": "HT"
    },
    {
        "name": "Holy See (Vatican City State)",
        "dial_code": "+379",
        "code": "VA"
    },
    {
        "name": "Honduras",
        "dial_code": "+504",
        "code": "HN"
    },
    {
        "name": "Hong Kong",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "India",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "dial_code": "+98",
        "code": "IR"
    },
    {
        "name": "Iraq",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "Isle of Man",
        "dial_code": "+44",
        "code": "IM"
    },
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Italy",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "dial_code": "+1876",
        "code": "JM"
    },
    {
        "name": "Japan",
        "dial_code": "+81",
        "code": "JP"
    },
    {
        "name": "Jersey",
        "dial_code": "+44",
        "code": "JE"
    },
    {
        "name": "Jordan",
        "dial_code": "+962",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "dial_code": "+77",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "dial_code": "+254",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "dial_code": "+686",
        "code": "KI"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "dial_code": "+850",
        "code": "KP"
    },
    {
        "name": "Korea, Republic of South Korea",
        "dial_code": "+82",
        "code": "KR"
    },
    {
        "name": "Kuwait",
        "dial_code": "+965",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "dial_code": "+996",
        "code": "KG"
    },
    {
        "name": "Laos",
        "dial_code": "+856",
        "code": "LA"
    },
    {
        "name": "Latvia",
        "dial_code": "+371",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "dial_code": "+961",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "dial_code": "+266",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "dial_code": "+231",
        "code": "LR"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "dial_code": "+218",
        "code": "LY"
    },
    {
        "name": "Liechtenstein",
        "dial_code": "+423",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "dial_code": "+370",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "dial_code": "+352",
        "code": "LU"
    },
    {
        "name": "Macao",
        "dial_code": "+853",
        "code": "MO"
    },
    {
        "name": "Macedonia",
        "dial_code": "+389",
        "code": "MK"
    },
    {
        "name": "Madagascar",
        "dial_code": "+261",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "dial_code": "+265",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "dial_code": "+60",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "dial_code": "+960",
        "code": "MV"
    },
    {
        "name": "Mali",
        "dial_code": "+223",
        "code": "ML"
    },
    {
        "name": "Malta",
        "dial_code": "+356",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "dial_code": "+692",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "dial_code": "+596",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "dial_code": "+222",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "dial_code": "+230",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "dial_code": "+262",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "dial_code": "+52",
        "code": "MX"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "dial_code": "+691",
        "code": "FM"
    },
    {
        "name": "Moldova",
        "dial_code": "+373",
        "code": "MD"
    },
    {
        "name": "Monaco",
        "dial_code": "+377",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "dial_code": "+976",
        "code": "MN"
    },
    {
        "name": "Montenegro",
        "dial_code": "+382",
        "code": "ME"
    },
    {
        "name": "Montserrat",
        "dial_code": "+1664",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "dial_code": "+212",
        "code": "MA"
    },
    {
        "name": "Mozambique",
        "dial_code": "+258",
        "code": "MZ"
    },
    {
        "name": "Myanmar",
        "dial_code": "+95",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "dial_code": "+264",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "dial_code": "+674",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "dial_code": "+977",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "dial_code": "+31",
        "code": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "dial_code": "+599",
        "code": "AN"
    },
    {
        "name": "New Caledonia",
        "dial_code": "+687",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "dial_code": "+64",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "dial_code": "+505",
        "code": "NI"
    },
    {
        "name": "Niger",
        "dial_code": "+227",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "dial_code": "+234",
        "code": "NG"
    },
    {
        "name": "Niue",
        "dial_code": "+683",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "dial_code": "+672",
        "code": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "dial_code": "+1670",
        "code": "MP"
    },
    {
        "name": "Norway",
        "dial_code": "+47",
        "code": "NO"
    },
    {
        "name": "Oman",
        "dial_code": "+968",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "dial_code": "+92",
        "code": "PK"
    },
    {
        "name": "Palau",
        "dial_code": "+680",
        "code": "PW"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "dial_code": "+970",
        "code": "PS"
    },
    {
        "name": "Panama",
        "dial_code": "+507",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "dial_code": "+675",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "dial_code": "+595",
        "code": "PY"
    },
    {
        "name": "Peru",
        "dial_code": "+51",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "dial_code": "+63",
        "code": "PH"
    },
    {
        "name": "Pitcairn",
        "dial_code": "+872",
        "code": "PN"
    },
    {
        "name": "Poland",
        "dial_code": "+48",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "dial_code": "+351",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "dial_code": "+1939",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "dial_code": "+974",
        "code": "QA"
    },
    {
        "name": "Romania",
        "dial_code": "+40",
        "code": "RO"
    },
    {
        "name": "Russia",
        "dial_code": "+7",
        "code": "RU"
    },
    {
        "name": "Rwanda",
        "dial_code": "+250",
        "code": "RW"
    },
    {
        "name": "Reunion",
        "dial_code": "+262",
        "code": "RE"
    },
    {
        "name": "Saint Barthelemy",
        "dial_code": "+590",
        "code": "BL"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dial_code": "+290",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "dial_code": "+1869",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "dial_code": "+1758",
        "code": "LC"
    },
    {
        "name": "Saint Martin",
        "dial_code": "+590",
        "code": "MF"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "dial_code": "+508",
        "code": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "dial_code": "+1784",
        "code": "VC"
    },
    {
        "name": "Samoa",
        "dial_code": "+685",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "dial_code": "+378",
        "code": "SM"
    },
    {
        "name": "Sao Tome and Principe",
        "dial_code": "+239",
        "code": "ST"
    },
    {
        "name": "Saudi Arabia",
        "dial_code": "+966",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "dial_code": "+221",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "dial_code": "+381",
        "code": "RS"
    },
    {
        "name": "Seychelles",
        "dial_code": "+248",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "dial_code": "+232",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "dial_code": "+65",
        "code": "SG"
    },
    {
        "name": "Slovakia",
        "dial_code": "+421",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "dial_code": "+386",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "dial_code": "+677",
        "code": "SB"
    },
    {
        "name": "Somalia",
        "dial_code": "+252",
        "code": "SO"
    },
    {
        "name": "South Africa",
        "dial_code": "+27",
        "code": "ZA"
    },
    {
        "name": "South Sudan",
        "dial_code": "+211",
        "code": "SS"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "dial_code": "+500",
        "code": "GS"
    },
    {
        "name": "Spain",
        "dial_code": "+34",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "dial_code": "+94",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "dial_code": "+249",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "dial_code": "+597",
        "code": "SR"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "dial_code": "+47",
        "code": "SJ"
    },
    {
        "name": "Swaziland",
        "dial_code": "+268",
        "code": "SZ"
    },
    {
        "name": "Sweden",
        "dial_code": "+46",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "dial_code": "+41",
        "code": "CH"
    },
    {
        "name": "Syrian Arab Republic",
        "dial_code": "+963",
        "code": "SY"
    },
    {
        "name": "Taiwan",
        "dial_code": "+886",
        "code": "TW"
    },
    {
        "name": "Tajikistan",
        "dial_code": "+992",
        "code": "TJ"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "dial_code": "+255",
        "code": "TZ"
    },
    {
        "name": "Thailand",
        "dial_code": "+66",
        "code": "TH"
    },
    {
        "name": "Timor-Leste",
        "dial_code": "+670",
        "code": "TL"
    },
    {
        "name": "Togo",
        "dial_code": "+228",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "dial_code": "+690",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "dial_code": "+676",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "dial_code": "+1868",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "dial_code": "+216",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "dial_code": "+90",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "dial_code": "+993",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "dial_code": "+1649",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "dial_code": "+688",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "dial_code": "+256",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "dial_code": "+380",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "dial_code": "+971",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "dial_code": "+44",
        "code": "GB"
    },
    {
        "name": "United States",
        "dial_code": "+1",
        "code": "US"
    },
    {
        "name": "Uruguay",
        "dial_code": "+598",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "dial_code": "+998",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "dial_code": "+678",
        "code": "VU"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dial_code": "+58",
        "code": "VE"
    },
    {
        "name": "Vietnam",
        "dial_code": "+84",
        "code": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "dial_code": "+1284",
        "code": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "dial_code": "+1340",
        "code": "VI"
    },
    {
        "name": "Wallis and Futuna",
        "dial_code": "+681",
        "code": "WF"
    },
    {
        "name": "Yemen",
        "dial_code": "+967",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "dial_code": "+260",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "dial_code": "+263",
        "code": "ZW"
    }
];
//# sourceMappingURL=country.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YOUTUBE_VIDEOS; });
var YOUTUBE_VIDEOS = [
    {
        author: 'Support Ambulance Fuel',
        authorIcon: 'https://i.ytimg.com/vi/257lhkkhakA/hqdefault.jpg',
        videoThumbnail: 'https://i.ytimg.com/vi/257lhkkhakA/hqdefault.jpg',
        title: 'Why do we need your support with Ambulance Fuel',
        description: "Learn Kotlin Fast → http://bit.ly/2xBXFFo\nWeb Notifications API in FCM → http://bit.ly/2xuT6gd\nML specialization on Coursera → http://bit.ly/2J4m1cd\nCloud ML Engine → http://bit.ly/2J2Vmg4\nGoogle Kubernetes Engine 1.10 → http://bit.ly/2J506Sq\nChrome 64 Beta → http://bit.ly/2xuIONc\n\n\nThis week’s TL;DR #DevShow is led by Google Developer Advocate Timothy Jordan. TL;DR is where you can stay up to date on all the latest developer news at Google. \n\nTL;DR Playlist → https://goo.gl/cHuQkL\nSubscribe to Google Developers → http://goo.gl/mQyv5L",
        videoId: '257lhkkhakA',
    },
];
//# sourceMappingURL=youtube-content.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileTitle = false;
        this.addressTitle = false;
        this.donationTitle = false;
        this.profileContent = false;
        this.headerProfile = true;
        this.donatedContainer = true;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.profileBtn = function () {
        if (this.profileTitle == false) {
            this.headerProfile = false;
            this.donatedContainer = false;
            this.profileTitle = true;
            this.profileContent = true;
            var degrees = 90;
            console.log("degrees: ", degrees);
            // $("#proficon").css({'-webkit-transform' : 'rotate('+ degrees +'deg) !important',
            //   '-moz-transform' : 'rotate('+ degrees +'deg) !important',
            //   '-ms-transform' : 'rotate('+ degrees +'deg) !important',
            //   'transform' : 'rotate('+ degrees +'deg) !important'});
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#proficon").css("transform", "rotate(90deg)");
        }
        else {
            this.headerProfile = true;
            this.donatedContainer = true;
            this.profileTitle = false;
            this.profileContent = false;
        }
    };
    ProfilePage.prototype.addressBtn = function () {
    };
    ProfilePage.prototype.donationBtn = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar color="redbg">\n	<button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n	</button>\n    <ion-title>Lebanese Red Cross</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="header-profile" *ngIf="headerProfile">\n		<h2>Hello, Sarah</h2>\n		<span class="donor-title">LRC Regular Doner</span>\n		<p >Current Membership: <strong>3$/month</strong> <ion-icon ios="ios-create" md="md-create"></ion-icon></p>\n	</div>\n	<div class="donated-container" *ngIf="donatedContainer">\n		<div class="donated">\n			<h2>DONATED</h2>\n			<p>Total amount of donation till date:</p>\n		</div>\n		<div class="amount">\n			<h1>$ 36.00</h1>\n		</div>\n	</div>\n	<div class="buttons-container">\n		<h4 *ngIf="profileTitle">EDIT / UPDATE PROFILE INFO</h4>\n		<div class="button" (click)="profileBtn()">\n			<p>EDIT / UPDATE PROFILE INFO</p>\n		</div>\n		<ion-icon ios="ios-arrow-forward" md="md-arrow-forward"  id="proficon" ></ion-icon>\n		<div class="profile-content" *ngIf="profileContent">\n		<div class="form-inputs">\n			<ion-item>\n			    <ion-label floating>Full Name</ion-label>\n			    <ion-input style="    background-color: transparent;"></ion-input>\n			</ion-item>\n			<ion-item>\n			    <ion-label floating>Email Address</ion-label>\n			    <ion-input style="background-color: transparent;"></ion-input>\n			</ion-item>\n			<ion-item>\n			    <ion-label floating>Password</ion-label>\n			    <ion-input style="background-color: transparent;" type="password"></ion-input>\n			</ion-item>\n			<ion-item>\n			    <ion-label floating>Confirm Password</ion-label>\n			    <ion-input style="background-color: transparent;" type="password"></ion-input>\n			</ion-item>\n			<ion-item>\n			    <ion-label floating>Phone Number</ion-label>\n			    <ion-input style="background-color: transparent;"></ion-input>\n			</ion-item>\n		</div>\n\n		</div>\n		<h2 *ngIf="addressTitle">EDIT / UPDATE ADDRESS INFO</h2>\n		<div class="button" (click)="addressBtn()">\n			<p>EDIT / UPDATE ADDRESS INFO</p>\n		</div>\n		<ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n		<h2 *ngIf="donationTitle">EDIT / UPDATE DONATION INFO</h2>\n		<div class="button" (click)="donationBtn()">\n			<p>EDIT / UPDATE DONATION INFO</p>\n		</div>\n		<ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_home_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_slider_slider__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_privacy_policy_privacy_policy__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_get_in_touch_get_in_touch__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_live_chat_live_chat__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/* Menu Pages */






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authenticationService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_slider_slider__["a" /* SliderPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */] },
            { title: 'Live Chat', component: __WEBPACK_IMPORTED_MODULE_12__pages_live_chat_live_chat__["a" /* LiveChatPage */] },
            { title: 'Get in touch', component: __WEBPACK_IMPORTED_MODULE_11__pages_get_in_touch_get_in_touch__["a" /* GetInTouchPage */] },
            { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_10__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */] },
            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_9__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */] },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us__["a" /* AboutUsPage */] },
        ];
        this.activePage = this.pages[0].component;
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
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
    };
    MyApp.prototype.checkActive = function (page) {
        return page.component === this.activePage;
    };
    MyApp.prototype.openProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.signOut = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myApp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */])
    ], MyApp.prototype, "app", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/app/app.html"*/'<ion-menu id="myMenu" [content]="content">\n  <ion-header no-border>\n    <ion-toolbar>\n        <p float-right (click)="signOut()"><ion-icon color="redbg" ios="ios-exit" md="md-exit"></ion-icon> Sign out</p>\n        <ion-icon class="ic-contact" ios="ios-contact" md="md-contact"></ion-icon>\n        <p class="user-display">Hi,<strong>SARAH</strong></p>\n        <div class="hr"></div>\n        <p align="center"  (click)="openProfile()"> <ion-icon class="ic-settings" ios="ios-settings" md="md-settings"></ion-icon> Manage Profile</p>\n        <p class="app-version" align="right">V 1.01</p>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-grid class="grid-menu">\n      <ion-row menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="menu-row">\n        <ion-col col-1>\n          <div [class.activeHighLight]="checkActive(p)"> </div>\n        </ion-col>\n        <ion-col col-11 class="title-column">\n          {{p.title}}\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  <ion-footer>\n    <p>&copy; Lebanese Red Cross 2018</p>\n    <div class="designed-developed">\n      <p>DESIGNED & DEVELOPED BY</p>\n      <img src="assets/imgs/likwid-logo.png">\n    </div>\n\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        console.log('Hello ProgressBarComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/components/progress-bar/progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}%\n    </div>\n</div>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WordpressService = /** @class */ (function () {
    function WordpressService(http, alertCtrl, storage, authenticationService) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.authenticationService = authenticationService;
        this.dataInfo = {
            name: '',
            email: '',
            firstname: '',
            lastname: '',
            username: '',
            userId: ''
        };
        this.consumer_key = 'ck_3bbcc0fa89ba85a0fde0b2cf1364b4874978a329';
        this.sumer_secret = 'cs_3a093ebabf273c72fc9ffadfc8be8659dac5b7bc';
        /** TO BE UNCOMMENTED BEFORE LIVE **/
        // this.authenticationService.getUser().then(sres=>{
        //   if(sres){
        //     this.userId = sres.id;
        //     this.dataInfo.email = sres.email;
        //     this.dataInfo.firstname = sres.displayname;
        //     this.dataInfo.username = sres.username;
        //     this.dataInfo.lastname = sres.displayname;
        //     this.mytoken = sres.token;
        //   }
        // })
        // console.log("USER_ID: "+this.userId);
        /** ****************************** **/
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('Access-Control-Allow-Origin' , '*');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    WordpressService.prototype.getRecentPosts = function (categoryId, page) {
        if (page === void 0) { page = 1; }
        //if we want to query posts by category
        var category_url = categoryId ? ("&categories=" + categoryId) : "";
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* WORDPRESS_REST_API_URL */]
            + 'posts?page=' + page
            + category_url)
            .map(function (res) { return res.json(); });
    };
    WordpressService.prototype.getAllPosts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* WORDPRESS_REST_API_URL */]
            + 'posts?categories=1')
            .map(function (res) { return res.json(); });
    };
    WordpressService.prototype.getTerms = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* WORDPRESS_REST_API_URL */]
            + 'posts/32')
            .map(function (res) { return res.json(); });
    };
    WordpressService.prototype.getPrivacy = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* WORDPRESS_REST_API_URL */]
            + 'posts/34')
            .map(function (res) { return res.json(); });
    };
    WordpressService.prototype.getProducts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["b" /* WORDPRESS_URL */]
            + 'wp-json/wooconnector/product/getproductbycategory/')
            .map(function (res) { return res.json(); });
    };
    WordpressService.prototype.saveCard = function (mytoken) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["b" /* WORDPRESS_URL */]
            + '/pay_red/save.php?uid=' + this.userId + "&token=" + mytoken)
            .map(function (res) { return res.json(); });
    };
    WordpressService.prototype.createOrder = function (donation, oid) {
        var link = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* WORDPRESS_URL */] + '/wp-json/wc/v2/orders?consumer_key=' + this.consumer_key + '&consumer_secret=' + this.sumer_secret;
        console.log(link);
        console.log("Credit_Card");
        console.log("user ids", +this.userId);
        var payment_title = 'Credit Card (Payfort)';
        var postParams = {
            "payment_method": "Credit_Card",
            "payment_method_title": payment_title,
            "customer_id": this.userId,
            "set_paid": true,
            "status": 'completed',
            "billing": {
                "first_name": this.dataInfo.firstname,
                "last_name": this.dataInfo.lastname,
                "country": "LB",
                "email": this.dataInfo.email,
                "phone": "123456789"
            },
            "line_items": [
                {
                    "product_id": donation.id,
                    "quantity": 1,
                    "subtotal": donation.value + "",
                    "subtotal_tax": "0.00",
                    "total": "" + donation.value,
                    "total_tax": "0.00",
                    "taxes": [],
                    "meta_data": [],
                    "sku": "",
                    "price": donation.value + ""
                }
            ],
            "meta_data": [
                {
                    "key": "_source_contact_name",
                    "value": this.dataInfo.firstname
                },
                {
                    "key": "tmp_id",
                    "value": oid
                }
            ],
        };
        console.log(JSON.stringify(postParams));
        return this.http.post(link, postParams, this.options)
            .map(function (response) { return response.json(); });
    };
    WordpressService.prototype.getPhoneCode = function (phone) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["b" /* WORDPRESS_URL */]
            + 'verify/sms.php?phone=' + phone)
            .map(function (res) { return res.json(); });
    };
    WordpressService.prototype.registerUser = function (name, email, password, phone, kaza, district, village, streetnum, building, street) {
        var link = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* WORDPRESS_URL */] + '/wp-json/wp/v2/users?consumer_key=' + this.consumer_key + '&consumer_secret=' + this.sumer_secret;
        console.log(link);
        console.log("Credit_Card");
        console.log("user ids", +this.userId);
        var payment_title = 'Credit Card (Payfort)';
        var postParams = {
            "name": name,
            "password": password,
            "email": email,
            "username": email,
            "meta_data": [
                {
                    "key": "phone",
                    "value": phone
                },
                {
                    "key": "kaza",
                    "value": kaza
                },
                {
                    "key": "district",
                    "value": district
                },
                {
                    "key": "village",
                    "value": village
                },
                {
                    "key": "streetnum",
                    "value": streetnum
                },
                {
                    "key": "building",
                    "value": building
                },
                {
                    "key": "street",
                    "value": street
                }
            ],
        };
        console.log(JSON.stringify(postParams));
        return this.http.post(link, postParams, this.options)
            .map(function (response) { return response.json(); });
    };
    WordpressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__authentication_service__["a" /* AuthenticationService */]])
    ], WordpressService);
    return WordpressService;
}());

//# sourceMappingURL=wordpress.service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intl_tel_input__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intl_tel_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_intl_tel_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sms_verification_sms_verification__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mocks_country__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terms_and_conditions_terms_and_conditions__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, menuCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.name = "";
        this.email = "";
        this.confirm = "";
        this.password = "";
        this.phone = "";
        /* Enable False (To hide the side nav) */
        this.menuCtrl.enable(false, 'myMenu');
        this.countriesData = __WEBPACK_IMPORTED_MODULE_5__mocks_country__["a" /* COUNTRIES */];
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        // console.log(this.countriesData);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#phone").intlTelInput({
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
    };
    /* Submit Sign up Function */
    RegisterPage.prototype.btnSignUp = function () {
        var intlNumber = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#phone").intlTelInput("getNumber"); // get full number eg +17024181234
        var countryData = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#phone").intlTelInput("getSelectedCountryData"); // get country data as obj
        var countryCode = countryData.dialCode; // using updated doc, code has been replaced with dialCode
        countryCode = "+" + countryCode; // convert 1 to +1
        var newNo = intlNumber.replace(countryCode, "" + countryCode + "");
        //console.log(this.name, " ", newNo, " ", this.password, " ", this.confirm, this.email);
        if (this.password === this.confirm) {
            if (this.name.length > 0 && this.phone.length > 0 && this.email.length > 0) {
                var newUser = {
                    "name": this.name,
                    "phone": newNo,
                    "password": this.password,
                    "email": this.email
                };
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sms_verification_sms_verification__["a" /* SmsVerificationPage */], { newUser: newUser });
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'LRC IGP',
                    subTitle: 'Please fill all the fields!',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'LRC IGP',
                subTitle: 'Please confirm your password!',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    RegisterPage.prototype.goToTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="redbg">\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background-color: #cb2026">\n	<div class="register-container">\n		<div class="col-title">\n			<h2>Sign UP</h2>\n			<p>\n				Sign up and start donating instantly.\n			</p>\n		</div>\n    <ion-item>\n      <ion-label floating>Your Full Name </ion-label>\n      <ion-input [(ngModel)]="name" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Your Email </ion-label>\n      <ion-input [(ngModel)]="email" type="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Enter Password </ion-label>\n      <ion-input [(ngModel)]="password" type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Confirm Password </ion-label>\n      <ion-input [(ngModel)]="confirm" type="password"></ion-input>\n    </ion-item>\n		  <ion-item class="mobile-container">\n		  	<!-- <ion-select class="flag-select">\n		  		<ion-option *ngFor="let country of countriesData" value="{{ country.dial_code }}"> {{ country.dial_code }} <span class="flag-icon flag-icon-{{ country.code | lowercase }}"> </span> </ion-option>\n		  	</ion-select>\n		  	<ion-input type="number" placeholder="Mobile Number ex: 123123" class="mobile-number-input"> </ion-input> -->\n		  	<input id="phone" [(ngModel)]="phone" type="tel" style=" background-color: #f3f3f3;\n    border: none;width: 88vw;">\n\n		  </ion-item>\n		  <!-- Submit Sign up From -->\n		<div class="button-container">\n			<button ion-button block class="btn-signin cos-button" color="redbg" (click)="btnSignUp()">Sign UP</button>\n			<div class="separator">\n				<span>— OR —</span>\n			</div>\n			<button ion-button block class="btn-fb-signin cos-button">Login with Facebook</button>\n		</div>\n\n		<div class="privacy-wrapper">\n		<p class="privacy-policy">By creating an account your agree to our <strong class="privacy" (click)="goToTerms()">Privacy Policy</strong> and <strong class="terms" (click)="goToTerms()">Terms of Use</strong></p>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="redbg">\n  	<button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n	</button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(nativeStorage, http, storage) {
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.storage = storage;
    }
    AuthenticationService.prototype.getUser = function () {
        return this.nativeStorage.getItem('User');
    };
    AuthenticationService.prototype.setUser = function (user) {
        return this.nativeStorage.setItem('User', user);
    };
    AuthenticationService.prototype.logOut = function () {
        return this.nativeStorage.clear();
    };
    AuthenticationService.prototype.doLogin = function (username, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* WORDPRESS_URL */] + 'wp-json/jwt-auth/v1/token', {
            username: username,
            password: password
        });
    };
    AuthenticationService.prototype.getUserWP = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* WORDPRESS_URL */] + 'wp-json/wp/v2/users/me ', {});
    };
    AuthenticationService.prototype.doRegister = function (user_data, token) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* WORDPRESS_REST_API_URL */] + 'users?token=' + token, user_data);
    };
    AuthenticationService.prototype.validateAuthToken = function (token) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Authorization', 'Basic ' + token);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* WORDPRESS_URL */] + 'wp-json/jwt-auth/v1/token/validate?token=' + token, {}, { headers: header });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AuthenticationService);
    return AuthenticationService;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_youtube_content__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__read_more_read_more__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_wordpress_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, videoPlayer, wordpressService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.videoPlayer = videoPlayer;
        this.wordpressService = wordpressService;
        this.main = true;
        this.plane = true;
        this.information = true;
        this.main2 = true;
        this.plane2 = true;
        this.information2 = true;
        this.ytVideos = __WEBPACK_IMPORTED_MODULE_2__mocks_youtube_content__["a" /* YOUTUBE_VIDEOS */];
        this.menuCtrl.enable(true, "myMenu");
        this.slidersData = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("entering");
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(this.wordpressService.getAllPosts())
            .subscribe(function (data) {
            _this.posts = data[0];
            _this.posts.forEach(function (p) {
                _this.pdata = {
                    bgImage: 'url(' + p.mobiconnector_feature_image.source_url + ')',
                    subBGImage: '',
                    tagInfo: p.title.rendered,
                    information: false,
                    main: true,
                    description1: p.content.rendered,
                    description2: p.content.rendered,
                    videoId: ''
                };
                _this.slidersData.push(_this.pdata);
            });
        });
    };
    HomePage.prototype.infoBtn = function (num) {
        var slider = this.slidersData[num];
        slider.information = true;
        slider.main = false;
        slider.subBGImage = slider.bgImage;
        // slider.bgImage = 'white';
    };
    HomePage.prototype.informationCloseBtn = function (num) {
        var slider = this.slidersData[num];
        slider.information = false;
        slider.main = true;
        // slider.bgImage = slider.subBGImage;
    };
    HomePage.prototype.playVideo = function (video) {
        this.videoPlayer.openVideo(video.videoId);
        console.log('YT');
    };
    HomePage.prototype.readMore = function (slide) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__read_more_read_more__["a" /* ReadMorePage */], { slide: slide });
    };
    HomePage.prototype.shareBtn = function (slide) {
        console.log('OBJECT: ', slide);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log(this.slidersData);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/home/home.html"*/'<ion-header no-border>\n  <ion-navbar color="redbg">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lebanese Red Cross</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #cb2026">\n\n  <ion-slides pager centeredSlides="true" > \n    <!-- To set the background image is every slides -->\n    <ion-slide  *ngFor="let slide of slidersData; let i = index" [ngStyle]="{\'background\': \'\' + slide.bgImage + \'\' , \'background-repeat\' : \'no-repeat\' , \'background-size\' : \'cover\'}" >\n       <ion-icon float-right *ngIf="slide.information" class="information-close" ios="ios-close-circle" md="md-close-circle" (click)="informationCloseBtn(i)"></ion-icon>  \n      <div class="btn-container" *ngIf="slide.main">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-12> \n              <ion-icon float-left ios="ios-paper-plane" md="md-paper-plane" (click)="shareBtn(slide)"></ion-icon>\n              <ion-icon float-right ios="ios-information-circle" md="md-information-circle" (click)="infoBtn(i)"> </ion-icon>\n            </ion-col>\n           \n          </ion-row>\n\n           \n                <div class="tag" *ngIf="main">\n                  <h1>{{ slide.tagInfo }}</h1>\n                </div>  \n             \n        </ion-grid>\n      </div>\n\n      <!-- Click Information button to see this section -->\n      <!-- Information Section -->\n      <section style="background-color: white; border-radius: 21px; height: 100%;" class="information" *ngIf="slide.information">\n        <div style="border-radius: 21px 21px 0px 0px;" [ngStyle]="{\'background\': \'\' + slide.subBGImage + \'\' , \'background-repeat\' : \'no-repeat\' , \'background-size\' : \'cover\' , \'height\' : \'40%\' , \'background-position\' : \'center\' , \'margin-bottom\': \'3%\'}" >\n      <!--   <img [src]="slide.subBGImage" (click)="playVideo(slide)"/> -->\n      </div>\n        <p>{{ slide.author }}Sample Author</p> \n        <p class="bolder">{{ slide.title }}Saample Title of the Page</p>\n        <div class="button-container">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6> \n                <button ion-button float-left color="redbg" (click)="readMore(slide)"> Read More </button>\n              </ion-col>\n              <ion-col col-6>\n                <button ion-button float-right color="redbg"> Share </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <div> \n          <p>\n            {{ slide.description1 }}\n            <br/>\n            <br/>\n            {{ slide.description2 }}\n          </p>\n        </div>\n      </section>\n      <!-- End Information Section -->\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */], __WEBPACK_IMPORTED_MODULE_6__services_wordpress_service__["a" /* WordpressService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password_forget_password__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_tabs_home_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { NavController, LoadingController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, 
        //public loadingCtrl: LoadingController,
        menuCtrl, authenticationService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usernametxt = "";
        this.password = "";
        this.menuCtrl.enable(false, 'myMenu');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    /* Sample Alert for wrong username/password */
    LoginPage.prototype.btnSignIn = function () {
        var _this = this;
        //let loading = this.loadingCtrl.create();
        //  loading.present();
        var loading = this.loadingCtrl.create({});
        loading.present();
        this.authenticationService.doLogin(this.usernametxt, this.password)
            .subscribe(function (res) {
            var base64Url = res.json().token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var jwt_data = JSON.parse(window.atob(base64));
            // localStorage.setItem("currentUserId", jwt_data.data.user.id);
            _this.authenticationService.setUser({
                id: jwt_data.data.user.id,
                token: res.json().token,
                username: _this.usernametxt,
                displayname: res.json().user_display_name,
                email: res.json().user_email
            });
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_tabs_home_tabs__["a" /* HomeTabsPage */]);
        }, function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'SupportLRC',
                message: 'Your username or password are incorrect. <br /> please try again',
                cssClass: 'custom-alert-btn',
                buttons: [
                    {
                        text: 'Forget Password',
                        role: 'cancel',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forget_password_forget_password__["a" /* ForgetPasswordPage */]);
                        }
                    },
                    {
                        text: 'Login Now',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_tabs_home_tabs__["a" /* HomeTabsPage */]);
                            console.log('Buy clicked');
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alert.present();
            console.log(err);
        });
    };
    /* Go to Sign Up Page */
    LoginPage.prototype.goToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.test = function () {
        // this.navCtrl.push(AddressDetailsPage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="redbg">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #cb2026">\n	<div class="login-container">\n		<div class="col-title">\n			<h2>Sign in</h2>\n			<p>Use your credentials to login to the app</p>\n		</div>\n		  <ion-item>\n		  	<ion-label floating>Your Email</ion-label>\n		    <ion-input class="signin-input-email" type="text" [(ngModel)]="usernametxt" required></ion-input>\n		  </ion-item>\n\n		  <ion-item>\n		  	<ion-label floating>Password</ion-label>\n		    <ion-input class="signin-input-password" type="password" [(ngModel)]="password" required></ion-input>\n		  </ion-item>\n		<!-- Go to Sign In page -->\n		<button ion-button block class="btn-signin cos-button" color="redbg" (click)="btnSignIn()">Sign In</button>\n		<!-- Go to Sing Up Page -->\n		<div class="signup-container" (click)="goToSignUp()">\n			<p>Don\'t have an account? <strong>Sign Up</strong></p><br>\n		</div>\n		<div class="sigup-with-facebook">\n			<span class="_or">— OR —</span>\n			<button ion-button block class="btn-fb-signin cos-button" (click)="test()">Login with Facebook</button>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__donation_donation__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the HomeTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeTabsPage = /** @class */ (function () {
    function HomeTabsPage(navCtrl, navParams, alertCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.tab0Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.mysize = false;
        //this.myIndex = navParams.data.tabIndex || 0; 
        this.myIndex = 0;
        var status = navParams.get('data');
        console.log('STATUS: ', status);
        this.bFab = true;
        if (navParams.get('root')) {
            this.tab1Root = navParams.get('root');
            this.bFab = false;
        }
        else if (navParams.get('root2')) {
            this.tab1Root = navParams.get('root2');
            this.bFab = true;
            console.log('root2: ', navParams.get('root2'));
        }
        if (status) {
            this.bFab = true;
            var alert_1 = this.alertCtrl.create({
                title: 'SupportLRC',
                message: 'Thank you for your Donation! <br /> Spread the word and help us save lives.',
                cssClass: 'custom-alert-btn',
                buttons: [
                    {
                        text: 'SHARE',
                        handler: function () {
                            _this.navCtrl.setRoot(HomeTabsPage_1);
                        }
                    },
                    {
                        text: 'NO, THANKS',
                        handler: function () {
                            console.log('No thanks clicked');
                        }
                    }
                ]
            });
            alert_1.present();
        }
    }
    HomeTabsPage_1 = HomeTabsPage;
    HomeTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeTabsPage');
        console.log("Screen_Height: ", this.platform.height());
        if (this.platform.height() == 812) {
            this.mysize = true;
            this.marginTopp = 43;
        }
        else
            this.marginTopp = 18;
    };
    HomeTabsPage.prototype.donationPage = function () {
        //this.navCtrl.push(HomeTabsPage,{root: DonationPage});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__donation_donation__["a" /* DonationPage */], { root: __WEBPACK_IMPORTED_MODULE_5__donation_donation__["a" /* DonationPage */] });
    };
    HomeTabsPage = HomeTabsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tabs',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/home-tabs/home-tabs.html"*/'<ion-tabs [selectedIndex]="1"> \n	<ion-fab *ngIf="bFab && !mysize" bottom center (click)="donationPage()">\n	    <div ion-fab class="round-button"> \n		    DONATE\n		</div>\n		<ion-icon ios="ios-card" md="md-card"></ion-icon>\n	</ion-fab>\n	<ion-fab *ngIf="bFab && mysize" bottom center (click)="donationPage()" style="margin-bottom: 34px !important;">\n		<div ion-fab class="round-button">\n			DONATE\n		</div>\n		<ion-icon ios="ios-card" md="md-card"></ion-icon>\n	</ion-fab>\n  <ion-tab tabIcon="person" [root]="tab0Root" tabTitle="MY FROFILE"></ion-tab>\n  <ion-tab [root]="tab1Root"></ion-tab>\n  <ion-tab tabIcon="settings" [root]="tab2Root" tabTitle="SETTINGS" ></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/home-tabs/home-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], HomeTabsPage);
    return HomeTabsPage;
    var HomeTabsPage_1;
}());

//# sourceMappingURL=home-tabs.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the DonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonationPage = /** @class */ (function () {
    function DonationPage(navCtrl, navParams, wordpressService, authenticationService, iab, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordpressService = wordpressService;
        this.authenticationService = authenticationService;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.subscription = "";
        this.service = "";
        this.localSelect = false;
        this.prevBtn = true;
        this.nextBtn = true;
        this.prevBtn = false;
        this.subscriptionVal = "Monthly";
        this.subsContents = false;
    }
    DonationPage.prototype.ionViewDidLoad = function () {
        this.subscription = "onetime";
    };
    DonationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("entering");
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(this.wordpressService.getProducts()).subscribe(function (data) {
            _this.posts = data[0];
            //console.log(this.posts[0]);
            _this.donations = [];
            _this.posts[0].products.forEach(function (p) {
                _this.pdata = {
                    id: p.id,
                    dollar: p.price + "$",
                    value: p.price,
                    subscription: 'Monthly',
                    subscriptionContent: false
                };
                console.log(_this.pdata);
                _this.donations.push(_this.pdata);
            });
        });
    };
    DonationPage.prototype.next = function () {
        var next = this.slides.slideNext();
        console.log('NEXT: ', this.slides.getActiveIndex());
        if (this.slides.getActiveIndex() == 5) {
            this.nextBtn = false;
        }
        else {
            this.nextBtn = true;
        }
        if (this.slides.getActiveIndex() == 0) {
            this.prevBtn = false;
        }
        else {
            this.prevBtn = true;
        }
    };
    DonationPage.prototype.prev = function () {
        this.slides.slidePrev();
        console.log('PREV: ', this.slides.getActiveIndex());
        if (this.slides.getActiveIndex() == 0) {
            this.prevBtn = false;
        }
        else {
            this.prevBtn = true;
        }
        if (this.slides.getActiveIndex() == 5) {
            this.nextBtn = false;
        }
        else {
            this.nextBtn = true;
        }
    };
    DonationPage.prototype.getParameterByName = function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    DonationPage.prototype.donateBtn = function (donation) {
        var _this = this;
        donation = this.donations[this.slides.getActiveIndex()];
        console.log(this.makeid());
        var oid = this.makeid();
        var total = donation.value;
        var email = "gerard@limetag.me";
        var target = "_blank";
        var theOtherUrl = "res=success";
        var errorUrl = "res=error";
        var browser = this.iab.create("https://supportlrc.app/pay_red/startpay.php?oid=" + oid + "&total=" + total + "&customer_email=" + email, target, 'location=no');
        browser.on('loadstart').subscribe(function (e) {
            console.log(e.url);
            var token = _this.getParameterByName("token_name", e.url);
            if (e.url.indexOf(theOtherUrl) !== -1) {
                console.log("SUCCESS_PAY");
                browser.close();
                _this.wordpressService.createOrder(donation, oid)
                    .subscribe(function (res) {
                    console.log("ORDER_RES: " + res);
                    var alert = _this.alertCtrl.create({
                        title: 'LRC IGP',
                        subTitle: 'Thank you for your donation!',
                        buttons: ['OK']
                    });
                    alert.present();
                }, function (err) {
                    var alert = _this.alertCtrl.create({
                        title: 'LRC IGP',
                        subTitle: 'There was an error proccessing your payment!',
                        buttons: ['OK']
                    });
                    alert.present();
                    console.log("ORDER_ERR: " + err);
                });
                if (token != null)
                    _this.wordpressService.saveCard(token)
                        .subscribe(function (res) {
                    }, function (err) {
                    });
            }
            if (e.url.indexOf(errorUrl) !== -1) {
                console.log("ERROR_PAY");
                var alert_1 = _this.alertCtrl.create({
                    title: 'LRC IGP',
                    subTitle: 'There was an error proccessing your payment!',
                    buttons: ['OK']
                });
                alert_1.present();
                browser.close();
            }
        });
        //this.navCtrl.push(SubmitDonationPage,{ donation });
    };
    DonationPage.prototype.subBtn = function (subValue) {
        this.subscriptionVal = subValue;
        this.subsContents = false;
    };
    DonationPage.prototype.showSubsContens = function (num) {
        var donation = this.donations[num];
        if (donation.subscriptionContent == true) {
            donation.subscriptionContent = false;
        }
        else {
            donation.subscriptionContent = true;
        }
    };
    DonationPage.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    DonationPage.prototype.serviceChange = function () {
        console.log(this.service);
        if (this.service === "local")
            this.localSelect = true;
        else
            this.localSelect = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], DonationPage.prototype, "slides", void 0);
    DonationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donation',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/donation/donation.html"*/'<!--\n  Generated template for the DonationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="redbg">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Lebanese Red Cross</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="content-container">\n        <p class="choose-donation">CHOOSE YOUR DONATION AMOUNT</p>\n        <p class="as-low-as">As low as</p>\n\n\n\n        <!-- 	<ion-item style="margin-top: 60px;">\n                <ion-label class="select-component" >Select Department</ion-label>\n              <ion-select [(ngModel)]="department" class="costume-select-icon" >\n                <ion-option value="" ></ion-option>\n                <ion-option value=""></ion-option>\n              </ion-select>\n            </ion-item>\n\n\n          <ion-item>\n                <ion-label class="select-component" >Select Branch</ion-label>\n              <ion-select [(ngModel)]="branch" class="costume-select-icon">\n                <ion-option value="" ></ion-option>\n                <ion-option value=""></ion-option>\n              </ion-select>\n          </ion-item> -->\n\n        <ion-slides pager="false" #slides class="swiper-no-swiping">\n\n            <ion-slide *ngFor="let donation of donations; let i = index">\n                <div class="content-container">\n                    <!-- <p class="choose-donation">CHOOSE YOUR DONATION AMOUNT</p>\n                    <p class="as-low-as">As low as</p> -->\n                    <h1>{{ donation.dollar }}</h1>\n\n                    <div>\n                        <div class="subscription-header" >\n                            <ion-row>\n                                <ion-col col-3> </ion-col>\n                                <ion-col col-6 class="col-6-pre" (click)="showSubsContens(i)">\n                                    <!--<div class="sel-subscription">-->\n                                    <!--{{ donation.subscription }}-->\n                                    <!--</div>-->\n                                    <ion-item class="sel-subscription">\n                                        <ion-label>Subscription</ion-label>\n                                        <ion-select [(ngModel)]="subscription" >\n                                            <ion-option value="onetime">One Time</ion-option>\n                                            <ion-option value="monthly">Monthly</ion-option>\n                                        </ion-select>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-3> </ion-col>\n                            </ion-row>\n                        </div>\n                        <div  class="subscription-contents">\n                            <ion-row (click)="subBtn(\'One Time\')">\n                                <ion-col col-3> </ion-col>\n                                <ion-col col-6 class="col-pre">\n                                    <span>One Time</span>\n                                </ion-col>\n                                <ion-col col-3> </ion-col>\n                            </ion-row>\n                            <ion-row (click)="subBtn(\'Monthly\')">\n                                <ion-col col-3> </ion-col>\n                                <ion-col col-6 class="col-pre" >\n                                    <span>Monthly</span>\n                                </ion-col>\n                                <ion-col col-3> </ion-col>\n                            </ion-row>\n                        </div>\n                    </div>\n\n                    <!-- 	<ion-item style="margin-top: 60px;">\n                            <ion-label class="select-component" >Select Department</ion-label>\n                          <ion-select [(ngModel)]="department" class="costume-select-icon" >\n                            <ion-option value="" ></ion-option>\n                            <ion-option value=""></ion-option>\n                          </ion-select>\n                        </ion-item>\n\n\n                      <ion-item>\n                            <ion-label class="select-component" >Select Branch</ion-label>\n                          <ion-select [(ngModel)]="branch" class="costume-select-icon">\n                            <ion-option value="" ></ion-option>\n                            <ion-option value=""></ion-option>\n                          </ion-select>\n                      </ion-item> -->\n\n                    <!--\n                                        <ion-item style="    margin-bottom: -3vh;\n                        margin-top: 20px;">\n                                                <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>\n                                                <ion-label class="recurrent-monthly-donation">Recurrent Monthly Donation</ion-label>\n                                        </ion-item> -->\n                    <!-- <div class="text-wrapper">\n                    <p class="bychoosingRecurre"> By choosing "Recurrent Monthly Donation" you confirm you want to become a regular donor for the Lebanese Red Cross</p>\n                    </div>\n                <button ion-button block color="redbg" class="font-SF" class="font-SF" (click)="donateBtn(donation)"> DONATE </button> -->\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-item style="margin-top: 60px;" class="services">\n            <ion-label class="select-component" >Service</ion-label>\n            <ion-select [(ngModel)]="service" (ionChange)="serviceChange()" class="costume-select-icon" >\n                <ion-option value="national" >National Ambulance Service</ion-option>\n                <ion-option value="local">Local Ambulance Service</ion-option>\n            </ion-select>\n        </ion-item>\n\n\n        <ion-item *ngIf="localSelect" class="stations">\n            <ion-label class="select-component" >Ambulance Station</ion-label>\n            <ion-select [(ngModel)]="station" class="costume-select-icon">\n                <ion-option value="Spears" >Spears</ion-option>\n                <ion-option value="Gemmayzeh" >Gemmayzeh</ion-option>\n                <ion-option value="Furn el Chebak" >Furn el Chebak</ion-option>\n                <ion-option value="Mreijeh" >Mreijeh</ion-option>\n                <ion-option value="Jounieh" >Jounieh</ion-option>\n                <ion-option value="Antelias" >Antelias</ion-option>\n                <ion-option value="Cornet Chehwan" >Cornet Chehwan</ion-option>\n                <ion-option value="Beit Mery" >Beit Mery</ion-option>\n                <ion-option value="Jbeil" >Jbeil</ion-option>\n                <ion-option value="Jal el Dib" >Jal el Dib</ion-option>\n                <ion-option value="Falougha" >Falougha</ion-option>\n                <ion-option value="Bolonia" >Bolonia</ion-option>\n                <ion-option value="Kfarzebian" >Kfarzebian</ion-option>\n                <ion-option value="Zahle" >Zahle</ion-option>\n                <ion-option value="Kab Elias" >Kab Elias</ion-option>\n                <ion-option value="Baalbeck" >Baalbeck</ion-option>\n                <ion-option value="Joub Janine" >Joub Janine</ion-option>\n                <ion-option value="Hermel" >Hermel</ion-option>\n                <ion-option value="OMEGA" >OMEGA</ion-option>\n                <ion-option value="Rashaya" >Rashaya</ion-option>\n                <ion-option value="Mashghara" >Mashghara</ion-option>\n                <ion-option value="Saida" >Saida</ion-option>\n                <ion-option value="Jezzine" >Jezzine</ion-option>\n                <ion-option value="Jensnaya" >Jensnaya</ion-option>\n                <ion-option value="Ensarieh" >Ensarieh</ion-option>\n                <ion-option value="Nabatieh" >Nabatieh</ion-option>\n                <ion-option value="Tripoli" >Tripoli</ion-option>\n                <ion-option value="Batroun" >Batroun</ion-option>\n                <ion-option value="Koura" >Koura</ion-option>\n                <ion-option value="Besharre" >Besharre</ion-option>\n                <ion-option value="Zgorta" >Zgorta</ion-option>\n                <ion-option value="Halba" >Halba</ion-option>\n                <ion-option value="Kobayat" >Kobayat</ion-option>\n                <ion-option value="Hrar" >Hrar</ion-option>\n                <ion-option value="Baabda" >Baabda</ion-option>\n                <ion-option value="Aley" >Aley</ion-option>\n                <ion-option value="Bekaata" >Bekaata</ion-option>\n                <ion-option value="Kaber Chmoun" >Kaber Chmoun</ion-option>\n                <ion-option value="Deir el Kamar" >Deir el Kamar</ion-option>\n                <ion-option value="Damour" >Damour</ion-option>\n                <ion-option value="Choueifat" >Choueifat</ion-option>\n                <ion-option value="Hasbaya" >Hasbaya</ion-option>\n                <ion-option value="Tyr" >Tyr</ion-option>\n                <ion-option value="Tebnine" >Tebnine</ion-option>\n                <ion-option value="Marjeyoun" >Marjeyoun</ion-option>\n                <ion-option value="Rmeish" >Rmeish</ion-option>\n                <ion-option value="Chebaa" >Chebaa</ion-option>\n            </ion-select>\n        </ion-item>\n\n\n        <ion-item style="    margin-bottom: -3vh;\n   						 margin-top: 20px;">\n            <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>\n            <ion-label class="recurrent-monthly-donation">Recurrent Monthly Donation</ion-label>\n        </ion-item>\n\n\n\n        <div class="text-wrapper">\n            <p class="bychoosingRecurre"> By choosing "Recurrent Monthly Donation" you confirm you want to become a regular donor for the Lebanese Red Cross</p>\n        </div>\n        <button ion-button block color="redbg" class="font-SF" class="font-SF" (click)="donateBtn(donation)"> DONATE </button>\n\n    </div>\n\n    <!-- Previous Trigger Button -->\n    <button *ngIf="prevBtn" float-left ion-button class="btnPrev" style="background-image: url(\'assets/imgs/back.png\')" (click)="prev()"></button>\n    <!-- Next Trigger Button -->\n    <button *ngIf="nextBtn" float-right ion-button class="btnNext" style="background-image: url(\'assets/imgs/next.png\')" (click)="next()"></button>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/donation/donation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_wordpress_service__["a" /* WordpressService */],
            __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DonationPage);
    return DonationPage;
}());

//# sourceMappingURL=donation.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wordpress_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(navCtrl, navParams, wordpressService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordpressService = wordpressService;
    }
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsAndConditionsPage');
    };
    TermsAndConditionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("entering");
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin(this.wordpressService.getTerms())
            .subscribe(function (data) {
            _this.posts = data[0].content.rendered;
            //this.posts.forEach( p => {
            _this.description1 = _this.posts;
            //});
        });
    };
    TermsAndConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/terms-and-conditions/terms-and-conditions.html"*/'<!--\n  Generated template for the TermsAndConditionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar color="redbg">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Terms and Condition</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p [innerHTML]=description1>\n\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/LRC-IGP-IONIC/src/pages/terms-and-conditions/terms-and-conditions.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_wordpress_service__["a" /* WordpressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_wordpress_service__["a" /* WordpressService */]) === "function" && _c || Object])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map