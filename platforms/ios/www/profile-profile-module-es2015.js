(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'Edit_Profile' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id='sign-up-page' class='set-bg' class='bg-grey' style=\"height: 123vh;\">\n\n    <form [formGroup]=\"DriverForm\">\n      <div class='head-bar bg-black'>\n        <p class='vertical-middle text-center color-yellow big-font'>\n          {{'Profile' | translate}}</p>\n      </div>\n      <div style=\"padding-top: 5%;\" (click)=\"dataSrv.presentActionSheet(1)\" align=\"center\">\n        <img *ngIf=\"dataSrv.photo != null\" src=\"{{dataSrv.photo}}\" class=\"round-img\" style=\"opacity: 0.8;\">\n        <img *ngIf=\"dataSrv.photo == null\" src=\"assets/img/noImage.jpg\" class=\"round-img\" style=\"opacity: 0.8;\">\n        <p style=\"text-align: center; color:#f2c21e;\">{{'Student_ID' | translate}} : {{showuserId}}</p>\n      </div>\n      <div class='content-box'>\n        <div id='login-from-box' class='m-top-20' ng-form='sign_up_form'>\n          <div class='main-container'>\n            <div class='input-box'>\n              <ion-input formControlName=\"name\" name='name' placeholder=\"{{'Name' | translate}}\" class='color-yellow'\n                type='text' required></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"information-circle-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/user.png' /> -->\n            </div>\n            <br>\n            <div class='input-box'>\n              <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='gender' required placeholder=\"Gender\"\n                class='color-yellow' formControlName=\"gender\">\n                <ion-select-option value=\"2\">Female</ion-select-option>\n                <ion-select-option value=\"1\">Male</ion-select-option>\n                <ion-select-option value=\"3\">Any</ion-select-option>\n              </ion-select>\n            </div>\n            <br>\n            <div class='input-box'>\n              <ion-input formControlName=\"user_name\" name='user_name' placeholder=\"{{'User_Name' | translate}}\"\n                class='color-yellow' type=\"text\" required></ion-input>\n              <ion-icon name=\"person\" class='input-icon icon-20'></ion-icon>\n\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/user.png' /> -->\n            </div>\n            <br>\n\n            <div class='input-box'>\n              <ion-input name='pwd' formControlName=\"password\" placeholder=\"{{'Password' | translate}}\"\n                class='color-yellow' ng-minlength='6' type='password' required></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"keypad-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/lock.png' /> -->\n            </div>\n\n            <br>\n            <div class='input-box'>\n              <ion-input formControlName=\"phone\" placeholder=\"{{'Phone' | translate}}\" type='number'\n                class='color-yellow' type='number' ng-minlength=\"10\" ng-maxlength=\"10\" required></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"call-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/mobile.png' /> -->\n            </div>\n            <br>\n\n            <div class='input-box'>\n              <ion-input name='mail' formControlName=\"email\" type='email' required ng-model='signUp.mail'\n                placeholder=\"{{'Mail' | translate}}\" class='color-yellow' type='email'></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"mail-open-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/mail.png' /> -->\n            </div>\n\n            <br>\n\n            <div class='input-box'>\n              <ion-input name='address' required placeholder=\"{{'Address' | translate}}\" class='color-yellow'\n                type='text' formControlName=\"address\" value=\"{{dataSrv.address}}\" (ionFocus)=\"dataSrv.GetMap()\">\n              </ion-input>\n              <ion-icon class='input-icon icon-20' name=\"navigate-circle-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/mail.png' /> -->\n            </div>\n            <br>\n            <ion-row size=\"12\">\n              <ion-col size=\"6\" style=\"margin-top: 10px;color: #caa21b;text-align: center;\">\n                <div class=\"container\" align=\"center\">\n                  <ion-buttons *ngIf=\"dataSrv.card_id != null\">\n                    <ion-button class=\"btn\" (click)=\"delete(2)\">\n                      x\n                    </ion-button>\n                  </ion-buttons>\n                  <img id=\"myImg\" *ngIf=\"dataSrv.card_id != null\" src=\"{{dataSrv.card_id}}\" class=\"addImg\"\n                    imageViewer />\n                  <img id=\"myImg\" *ngIf=\"dataSrv.card_id == null\" src=\"assets/img/addImage.jpg\" class=\"addImg\"\n                    (click)=\"dataSrv.presentActionSheet(2)\" />\n                </div>\n                <span style=\"font-size: small;\">{{'Personnel_Card' | translate}}</span>\n              </ion-col>\n              <ion-col size=\"6\" style=\"margin-top: 10px;color: #caa21b;text-align: center;\">\n                <div class=\"container\" align=\"center\">\n                  <ion-buttons *ngIf=\"dataSrv.student_id != null\">\n                    <ion-button class=\"btn\" (click)=\"delete(3)\">\n                      x\n                    </ion-button>\n                  </ion-buttons>\n                  <img id=\"myImg\" *ngIf=\"dataSrv.student_id != null\" src=\"{{dataSrv.student_id}}\" class=\"addImg\"\n                    imageViewer />\n                  <img id=\"myImg\" *ngIf=\"dataSrv.student_id == null\" src=\"assets/img/addImage.jpg\" class=\"addImg\"\n                    (click)=\"dataSrv.presentActionSheet(3)\" />\n                </div>\n                <span style=\"font-size: small;\">{{'Student_Card' | translate}}</span>\n              </ion-col>\n\n            </ion-row>\n            <input (click)=\"Update()\" class='btn bg-yellow color-white big-font m-top-butn-10' type='button'\n              value=\"{{'Update' | translate}}\" />\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/app/service/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let ProfilePage = class ProfilePage {
    constructor(location, formBuilder, dataSrv, alertSrv, stngs, modal, plt, menu, router) {
        this.location = location;
        this.formBuilder = formBuilder;
        this.dataSrv = dataSrv;
        this.alertSrv = alertSrv;
        this.stngs = stngs;
        this.modal = modal;
        this.plt = plt;
        this.menu = menu;
        this.router = router;
        this.DriverDatatemp = {};
        console.log("constructor");
        let user = JSON.parse(localStorage.getItem("User"));
        this.showuserId = user.id;
        this.buildDriverForm(user);
        this.active_non = localStorage.getItem("active_non");
        if (this.active_non == 0) {
            this.plt.backButton.subscribeWithPriority(9999, () => {
            });
        }
        menu.enable(true);
        // this.GetDriverData();
    }
    ngOnInit() {
        this.fcm = this.dataSrv.subscribePush();
    }
    buildDriverForm(user) {
        console.log(user);
        this.DriverForm = this.formBuilder.group({
            user_name: [user.user_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            password: [user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            gender: [user.gender + '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            name: [user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: [user.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            email: [user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            phone: [user.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            address: [user.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]]
        });
        this.dataSrv.photo = user.photo;
        this.dataSrv.card_id = user.card_id;
        this.dataSrv.student_id = user.student_id;
        let user_old = JSON.parse(localStorage.getItem("User_Old"));
        this.dataSrv.photo_name = user_old.photo;
        this.dataSrv.card_id_name = user_old.card_id;
        this.dataSrv.student_id_name = user_old.student_id;
    }
    GetDriverData() {
        this.alertSrv.show();
        let driver_id = localStorage.getItem("driver_id");
        if (!driver_id || driver_id == "") {
            return;
        }
        let api = "api/student_info";
        let body = {
            student_id: driver_id
        };
        this.dataSrv.httpPostMethod(api, body).then(res => {
            console.log(res);
            this.DriverData = JSON.parse(res["data"]);
            console.log(this.DriverData);
            this.alertSrv.hide();
        }, err => {
            if (err.status == -3 || err.status == -4) {
                this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            }
            else {
                this.alertSrv.presentToast("Something wrong", "danger");
            }
        });
    }
    ionViewDidEnter() {
        //console.log(document.querySelectorAll(".input-icon"))
        let elements = document.querySelectorAll(".input-icon");
        if (this.stngs.lang2 == 'ar')
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.replace("input-icon", "input-icon-rtl");
            }
    }
    Update() {
        this.alertSrv.show();
        let DriverData = {};
        this.fcm = this.dataSrv.subscribePush();
        let tempUser = JSON.parse(localStorage.getItem("User"));
        console.log(this.fcm);
        if (this.DriverForm.get("gender").value == "" || this.DriverForm.get("gender").value == null || this.DriverForm.get("password").value == "" || this.DriverForm.get("password").value == null || this.DriverForm.get("name").value == "" || this.DriverForm.get("name").value == null || this.DriverForm.get("user_name").value == "" || this.DriverForm.get("user_name").value == null) {
            this.alertSrv.presentToast("Please fill require data", "danger");
            return;
        }
        DriverData["name"] = this.DriverForm.get("name").value;
        DriverData["user_name"] = this.DriverForm.get("user_name").value;
        DriverData["password"] = this.DriverForm.get("password").value;
        DriverData["gender"] = this.DriverForm.get("gender").value;
        DriverData["location"] = "lat: " + this.dataSrv.lat + " ,long: " + this.dataSrv.long;
        DriverData["email"] = this.DriverForm.get("email").value;
        DriverData["phone"] = this.DriverForm.get("phone").value;
        DriverData["card_id"] = this.dataSrv.card_id_name ? this.compareImages(this.dataSrv.card_id_name) : null; // image
        DriverData["fcm_tokem"] = this.fcm;
        DriverData["active_non"] = 0;
        //http://pickmeupjo.com/pickmeup/uploads/
        DriverData["photo"] = this.dataSrv.photo_name ? this.compareImages(this.dataSrv.photo_name) : null; // image
        DriverData["student_id"] = this.dataSrv.student_id_name ? this.compareImages(this.dataSrv.student_id_name) : null; // image
        DriverData["stdid"] = localStorage.getItem("driver_id");
        if (this.DriverForm.get("name").value != '' && this.DriverForm.get("user_name").value != '' &&
            this.DriverForm.get("password").value != '' && this.dataSrv.lat != '' && this.dataSrv.long != '' &&
            this.DriverForm.get("email").value != '' && this.DriverForm.get("phone").value != '' && this.dataSrv.card_id_name != null && this.dataSrv.photo_name != null &&
            this.dataSrv.student_id_name != null) {
            DriverData["active_non"] = 1;
        }
        else {
            DriverData["active_non"] = 0;
        }
        console.log(DriverData);
        let api = "api/edit_student";
        this.DriverDatatemp = DriverData;
        this.dataSrv.httpPostMethod(api, DriverData).then(res => {
            let temp = JSON.parse(res["data"]);
            let sms = JSON.parse(res.data);
            console.log(temp["data"]);
            if (temp["data"] && temp["data"] != {} && temp["data"].length > 0) {
                localStorage.setItem("User_Old", JSON.stringify(temp["data"][0]));
                localStorage.setItem("driver_id", temp["data"][0].id);
                localStorage.setItem("active_non", temp["data"][0].active_non);
                temp["data"][0].photo = temp["data"][0].photo ? this.stngs.getSetting("baseURL") + temp["data"][0].photo : null;
                temp["data"][0].card_id = temp["data"][0].card_id ? this.stngs.getSetting("baseURL") + temp["data"][0].card_id : null;
                temp["data"][0].student_id = temp["data"][0].student_id ? this.stngs.getSetting("baseURL") + temp["data"][0].student_id : null;
                localStorage.setItem("User", JSON.stringify(temp["data"][0]));
                this.dataSrv.photo = temp["data"][0].photo;
                this.dataSrv.User_Name = temp["data"][0].user_name;
                this.dataSrv.Phone = temp["data"][0].phone;
                this.dataSrv.gender = temp["data"][0].gender;
            }
            // if (this.dataSrv.photo)
            //   this.dataSrv.upload(this.dataSrv.photo, this.dataSrv.photo_name, "uploadphoto");
            // if (this.dataSrv.student_id)
            //   this.dataSrv.upload(this.dataSrv.student_id, this.dataSrv.student_id_name, "uploadstudentid");
            // if (this.dataSrv.card_id)
            //   this.dataSrv.upload(this.dataSrv.card_id, this.dataSrv.card_id_name, "uploadcardid");
            this.alertSrv.hide();
            this.alertSrv.presentToast("Updated successfully ", "success");
            if (this.DriverForm.get("name").value != '' && this.DriverForm.get("user_name").value != '' &&
                this.DriverForm.get("password").value != '' && this.dataSrv.lat != '' && this.dataSrv.long != '' &&
                this.DriverForm.get("email").value != '' && this.DriverForm.get("phone").value != '' && this.dataSrv.card_id_name != null && this.dataSrv.photo_name != null &&
                this.dataSrv.student_id_name != null) {
                this.dataSrv.waiting = 0;
                this.router.navigate(["../home"], { replaceUrl: true });
            }
            else {
                this.dataSrv.waiting = 1;
                this.router.navigate(["../wait"], { replaceUrl: true });
            }
            //this.router.navigate(["../home"], { replaceUrl: true })
        }, err => {
            this.alertSrv.presentToast("Something wrong", "danger");
        });
    }
    delete(imageID) {
        if (imageID == 1) {
            this.dataSrv.photo = null;
            this.dataSrv.photo_name = null;
        }
        else if (imageID == 2) {
            this.dataSrv.card_id = null;
            this.dataSrv.card_id_name = null;
        }
        else if (imageID == 3) {
            this.dataSrv.student_id = null;
            this.dataSrv.student_id_name = null;
        }
    }
    compareImages(old_image, upload) {
        if (old_image == null) {
            return old_image;
        }
        else {
            var splitted = old_image.split("/");
            if (splitted.length > 0) {
                if (upload) {
                    this.dontUpload = 1;
                }
                return splitted[splitted.length - 1];
            }
            else {
                if (upload) {
                    this.dontUpload = 0;
                }
                return old_image;
            }
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map