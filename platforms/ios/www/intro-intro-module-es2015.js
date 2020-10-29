(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>intro</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"bg-yellow full-height\" full-height>\n    <div class=\"main-container\">\n      <div id=\"logo-box\">\n        <img class=\"logo vertical-middle\" src=\"assets/img/logo.png\" />\n      </div>\n      <div id=\"sign-in-box\">\n        <div class=\"vertical-middle\">\n          <ion-input\n            (click)=\"OpenRegister()\"\n            id=\"signup-redirect-btn\"\n            class=\"btn bg-yellow border-white\"\n            type=\"button\"\n            value=\"{{'New_User' | translate}}\"\n          ></ion-input>\n          <br />\n          <ion-input\n            (click)=\"OpenLogin()\"\n            id=\"signIn-redirect-btn\"\n            class=\"btn bg-white\"\n            type=\"button\"\n            value=\"{{'Sign_In' | translate}}\"\n          >\n          </ion-input>\n          <!-- <a class='a m-top-10'>\n            Forgot Password?</a> -->\n        </div>\n      </div>\n      <!-- <div id='sign-in-with' class='text-center'>\n        <div class='vertical-middle'>\n\n          <div class='white-line'></div>\n          <div class='line-title text-center'>\n            <span class='bg-yellow'>\n              {{'Or_sign_In_with' | translate}}</span>\n          </div>\n\n          <a (click)=\"facebookLogin()\"><img src='assets/img/icons/fb.png' /></a>\n        </div>\n      </div>-->\n    </div>\n  </div>\n  <div class=\"color-white text-center net-error\">No network connection!</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/intro/intro-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "./src/app/intro/intro-routing.module.ts");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let IntroPageModule = class IntroPageModule {
};
IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.page */ "./src/app/signup/signup.page.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let IntroPage = class IntroPage {
    constructor(modalController, router, fb, googlePlus, menu, alertSrv, dataSrv) {
        this.modalController = modalController;
        this.router = router;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.menu = menu;
        this.alertSrv = alertSrv;
        this.dataSrv = dataSrv;
        menu.enable(false);
    }
    ngOnInit() {
        this.fcm = this.dataSrv.subscribePush();
    }
    OpenLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
                componentProps: {
                    address: "",
                    latt: null,
                    long: null,
                },
            });
            return yield modal.present();
        });
    }
    OpenRegister() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_4__["SignupPage"],
                componentProps: {
                    address: "",
                    latt: null,
                    long: null,
                },
            });
            return yield modal.present();
        });
    }
    facebookLogin() {
        this.fb
            .getLoginStatus()
            .then((res) => {
            if (res.status == "connected") {
                console.log("user connected already" + res.authResponse.accessToken);
                this.fb
                    .api(`${res.authResponse.userID}?fields=id,name,email,first_name,last_name,gender,public_key`, [])
                    .then((profile) => {
                    this.userData = {
                        id: profile["id"],
                        name: profile["name"],
                        email: profile["email"],
                        first_name: profile["first_name"],
                        last_name: profile["last_name"],
                        gender: profile["gender"],
                        public_key: profile["public_key"],
                        access_token: res.authResponse.accessToken,
                    };
                    console.log(this.userData);
                    this.createAccount(this.userData);
                });
            }
            else {
                console.log("USer Not login ");
                this.fb
                    .login(["public_profile", "email"])
                    .then((res) => {
                    console.log("Logged into Facebook!", JSON.stringify(res));
                    this.fb
                        .api(`${res.authResponse.userID}?fields=id,name,email,first_name,last_name,gender,public_key`, [])
                        .then((profile) => {
                        this.userData = {
                            id: profile["id"],
                            name: profile["name"],
                            email: profile["email"],
                            first_name: profile["first_name"],
                            last_name: profile["last_name"],
                            gender: profile["gender"],
                            public_key: profile["public_key"],
                            access_token: res.authResponse.accessToken,
                        };
                        this.createAccount(this.userData);
                        console.log(this.userData);
                    });
                })
                    .catch((e) => {
                    console.log("Error logging With Facebook");
                });
            }
        })
            .catch((e) => {
            console.log("Error logging With Facebook");
        });
    }
    googleLogin() {
        let options = {
            scopes: "",
            webClientId: "373971382765-q67f9fn0polbl5t3l1t2afg6jn20slka.apps.googleusercontent.com",
            offline: true,
        };
        this.googlePlus
            .login({})
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }
    createAccount(data) {
        //alert("Creating Account")
        this.alertSrv.show();
        let DriverData = {};
        this.fcm = this.dataSrv.subscribePush();
        console.log(this.fcm);
        DriverData["name"] = data.name;
        DriverData["user_name"] = data.name;
        DriverData["password"] = null;
        DriverData["location"] =
            "lat: " + this.dataSrv.lat + " ,long: " + this.dataSrv.long;
        DriverData["car_id"] = null; // image
        DriverData["email"] = data.email;
        DriverData["phone"] = null;
        DriverData["card_id"] = null; // image
        DriverData["fcm_tokem"] = this.fcm;
        DriverData["photo"] = null; // image
        DriverData["driver_licence"] = null; // image
        DriverData["student_id"] = null; // image
        console.log(DriverData);
        let api = "api/register_studentٍٍٍ";
        this.dataSrv.httpPostMethod(api, DriverData).then((res) => {
            console.log(JSON.parse(res["data"]));
            this.alertSrv.hide();
            this.openHome();
            //   this.alertSrv.presentToast("You can Sign In Now.", "success")
        });
    }
    openHome() {
        this.dataSrv.resrAllImages();
        this.dataSrv.waiting = 1;
        localStorage.setItem("active_non", "0");
        this.router.navigate(["../wait"]);
    }
};
IntroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }
];
IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-intro",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module-es2015.js.map