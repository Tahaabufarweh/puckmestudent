function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-details-trip-details-module"], {
  /***/
  "./node_modules/ionic4-rating/dist/components/rating.js":
  /*!**************************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/components/rating.js ***!
    \**************************************************************/

  /*! exports provided: RatingComponent */

  /***/
  function node_modulesIonic4RatingDistComponentsRatingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return RatingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var RatingComponent =
    /** @class */
    function () {
      function RatingComponent() {
        this.size = 'default';
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      RatingComponent_1 = RatingComponent;

      RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);

        this._onChange(this.rate);
      };

      RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
          this.rate = value;
        }
      };

      RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
      };

      RatingComponent.prototype.registerOnTouched = function (fn) {};

      RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
      };

      var RatingComponent_1;

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RatingComponent.prototype, "rate", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], RatingComponent.prototype, "readonly", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], RatingComponent.prototype, "size", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], RatingComponent.prototype, "rateChange", void 0);

      RatingComponent = RatingComponent_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "rating",
        template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"star\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
        styles: ["\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: gray;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "],
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return RatingComponent_1;
          }),
          multi: true
        }]
      })], RatingComponent);
      return RatingComponent;
    }(); //# sourceMappingURL=rating.js.map

    /***/

  },

  /***/
  "./node_modules/ionic4-rating/dist/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/index.js ***!
    \**************************************************/

  /*! exports provided: IonicRatingModule, RatingComponent */

  /***/
  function node_modulesIonic4RatingDistIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ionic-rating.module */
    "./node_modules/ionic4-rating/dist/ionic-rating.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function () {
      return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"];
    });
    /* harmony import */


    var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/rating */
    "./node_modules/ionic4-rating/dist/components/rating.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/ionic4-rating/dist/ionic-rating.module.js":
  /*!****************************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/ionic-rating.module.js ***!
    \****************************************************************/

  /*! exports provided: IonicRatingModule */

  /***/
  function node_modulesIonic4RatingDistIonicRatingModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function () {
      return IonicRatingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/rating */
    "./node_modules/ionic4-rating/dist/components/rating.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var IonicRatingModule =
    /** @class */
    function () {
      function IonicRatingModule() {}

      IonicRatingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
        exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
        declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
      })], IonicRatingModule);
      return IonicRatingModule;
    }(); //# sourceMappingURL=ionic-rating.module.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/trip-details/trip-details.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trip-details/trip-details.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTripDetailsTripDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'Trip_Details' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background :#38393d; \">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"{{'Refreshing Data ...'|translate}}\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class='h-100-p  '>\n    <div id='det-box1' *ngFor=\"let trip of TripDetails\">\n      <ion-row class=\"row myRow\">\n        <ion-col class=\"col col-50 col-center\">\n          <p class='color-white'> {{'PICKUP_POINT' | translate}}</p>\n          <div class=\" color-gery\">{{trip.source}}</div>\n        </ion-col>\n        <ion-col class=\"col col-50 col-center\">\n          <div class=\"m-top-30 color-gery\" style=\"margin: 18px;\">{{trip.trip_date |date: 'dd/MM/yyyy'}} /\n            {{trip.trip_date |date: 'HH:mm'}}</div>\n        </ion-col>\n      </ion-row>\n      <div class='m-top-30 text-center'>\n        <div class='yellow-hr'></div>\n        <span class='mid-item bg-grey color-white' style=\"background: #38393d;\">{{'TO' | translate}}</span>\n      </div>\n      <ion-row class=\"row myRow\">\n        <ion-col class=\"col  col-center\">\n          <p class='color-white'>{{'DROP_POINT' | translate}}</p>\n          <div class=\" color-gery\">{{trip.destanation}}</div>\n        </ion-col>\n        <ion-col class=\"col   col-center\">\n          <div class=\"m-top-30 color-gery\" style=\"margin: 18px;\"></div>\n        </ion-col>\n      </ion-row>\n      <div class='m-top-30 text-center'>\n        <div class='yellow-hr'></div>\n        <span class='mid-item bg-grey color-white'\n          style=\"background: #38393d; width: 120px;\">{{'Gender'| translate}}</span>\n      </div>\n      <ion-row class=\"row myRow\">\n        <ion-col class=\"col  col-center\">\n          <p class='color-white'>{{'Gender' | translate}}</p>\n          <div class=\" color-gery\" *ngIf=\"trip.gender==1\">{{'Male' | translate}}</div>\n          <div class=\" color-gery\" *ngIf=\"trip.gender==2\">{{'Female' | translate}}</div>\n          <div class=\" color-gery\" *ngIf=\"trip.gender==3\">{{'Mix' | translate}}</div>\n\n        </ion-col>\n        <ion-col class=\"col   col-center\">\n          <div class=\"m-top-30 color-gery\" style=\"margin: 18px;\"></div>\n        </ion-col>\n      </ion-row>\n      <div class='m-top-30 text-center'>\n        <div class='yellow-hr'></div>\n        <span class='mid-item bg-grey color-white'\n          style=\"background: #38393d; width: 120px;\">{{'Car Details'| translate}}</span>\n      </div>\n      <ion-row class=\"row myRow\">\n        <ion-col class=\"col  col-center\">\n          <p class='color-white'>{{'car_model' | translate}}</p>\n          <div class=\" color-gery\">{{trip.car_model}}</div>\n          <p class='color-white'>{{'car_color'| translate}}</p>\n          <div class=\" color-gery\">{{trip.car_color}}</div>\n          <p class='color-white'>{{'car_number' | translate}}</p>\n          <div class=\" color-gery\">{{trip.car_number}}</div>\n      \n\n        </ion-col>\n    </ion-row>\n     \n     <div class='m-top-30 text-center'>\n      <div class='yellow-hr'></div>\n      <span class='mid-item bg-grey color-white'\n        style=\"background: #38393d; width: 120px;\">{{'Terms' | translate}}</span>\n    </div>\n    <ion-row class=\"row myRow\">\n      <ion-col class=\"col  col-center\">\n        \n        <div class=\" color-gery\" >{{trip.terms}}</div>\n       \n\n      </ion-col>\n      <ion-col class=\"col   col-center\">\n        <div class=\"m-top-30 color-gery\" style=\"margin: 18px;\"></div>\n      </ion-col>\n    </ion-row>\n  \n      <div class='m-top-30 text-center'>\n        <div class='yellow-hr'></div>\n        <span class='mid-item bg-grey color-white'\n          style=\"background: #38393d;width: 120px;\">{{'More_Details' | translate}}</span>\n      </div>\n      <ion-row class=\"row myRow\">\n        <ion-col class=\"col  col-center\">\n          <p class='color-white'>{{'Sets' | translate}}</p>\n          <div class=\" color-gery\">{{trip.number_of_set}}</div>\n        </ion-col>\n        <ion-col class=\"col   col-center\">\n          <p class='color-white'>{{'Price' | translate}}</p>\n          <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\">{{trip.price}} {{'JD' | translate}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row myRow\">\n        <ion-col class=\"col   col-center\">\n          <p class='color-white'>{{'Remaining_Sets' | translate}}</p>\n          <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\">{{trip.remain}}</div>\n        </ion-col>\n        <ion-col class=\"col   col-center\">\n          <p class='color-white'>{{'Status' | translate}}</p>\n          <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\" *ngIf=\"trip.status == 1\">{{'Pending' | translate}}</div>\n          <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\" *ngIf=\"trip.status == 2\">{{'On_Process' | translate}}\n          </div>\n          <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\" *ngIf=\"trip.status == 3\">{{'Completed' | translate}}\n          </div>\n          <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\" *ngIf=\"trip.status == 4\">{{'Canceled' | translate}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row myRow\">\n        <ion-col class=\"col   col-center\">\n          <p class='color-white'>{{'Phone' | translate}}</p>\n          <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\">{{trip.phone}}</div>\n        </ion-col>\n      </ion-row>\n      <div class='m-top-30 text-center' *ngIf=\"setDetails.length > 0\">\n        <div class='yellow-hr'></div>\n        <span class='mid-item bg-grey color-white'\n          style=\"background: #38393d;width: 120px;\">{{'Set_Details' | translate}}</span>\n      </div>\n      <div *ngFor=\"let set of setDetails\" style=\"border-bottom: 1px solid white;margin-bottom: 15px;\">\n        <ion-row>\n          <ion-item style=\"width: 100%;--background: #717171; border-bottom: 3px solid #f2c21e;\">\n            <ion-avatar slot=\"start\" style=\"height: 60px;width: 60px;\">\n              <img *ngIf=\"set.photo != null\" src=\"{{set.photo}}\" style=\"border-radius: 50%;height: 60px;width: 60px;\"\n                style=\"opacity: 0.8;\">\n              <img *ngIf=\"set.photo == null\" src=\"assets/img/noImage.jpg\"\n                style=\"border-radius: 50%;height: 60px;width: 60px;\" style=\"opacity: 0.8;\">\n            </ion-avatar>\n           \n\n            <!-- <div style=\"color: white;margin: 5px;width: 100%;position: absolute;top: 10%;\"><span\n                style=\"color:#f2c21e;\">{{'Student' | translate}} :</span>\n              {{set.name}}</div>\n            <br>\n            <div style=\"color: white;margin: 5px;width: 100%;position: absolute;top: 50%;\"><span\n                style=\"color:#f2c21e;\">{{'Phone' | translate}} :</span>\n              {{set.phone}}</div> -->\n          </ion-item>\n        </ion-row>\n        <ion-row class=\"row myRow\">\n          <ion-col class=\"col  col-center\">\n            <p class='color-white'>{{'Name' |translate}}</p>\n            <div class=\" color-gery\">{{set.name}}</div>\n          </ion-col>\n          <ion-col class=\"col   col-center\">\n            <p class='color-white'>{{'Status' | translate}}</p>\n            <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\" *ngIf=\"set.status == 1\">{{'Accepted1' | translate}}\n            </div>\n            <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\" *ngIf=\"set.status == 4\">{{'Canceled' | translate}}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"row myRow\">\n         <!-- <ion-col class=\"col  col-center\">\n            <p class='color-white'>{{'Review' | translate}}</p>\n            <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\">{{set.review}}</div>\n          </ion-col>-->\n          <ion-col class=\"col   col-center\">\n            <p class='color-white'>{{'Joining_Date' | translate}}</p>\n            <div class=\"m-top-30 color-gery\" style=\"margin: 0px;\">{{set.join_date}}</div>\n          </ion-col>\n\n        </ion-row>\n        <!-- <ion-row class=\"row myRow\">\n         <ion-col class=\"col  col-center\">\n            <p class='color-white'>{{'Rate' | translate}}</p>\n            <rating [(ngModel)]=\"set.rate\" readonly=\"true\" size=\"default\">\n            </rating>\n          </ion-col>\n        </ion-row> -->\n      </div>\n      <p class='text-center color-yellow bg-light p-head no-margin' *ngIf=\"roledIn && trip.status != 1 && trip.status != 4 \">{{'Rates' | translate}}\n      </p>\n      <rating [(ngModel)]=\"studentrate\" readonly=\"false\" size=\"default\" (ngModelChange)=\"onRateChange($event)\"\n        *ngIf=\"roledIn && trip.status != 1 && trip.status != 4 && (studentrate==null || studentrate==0) \"></rating>\n      <rating [(ngModel)]=\"studentrate\" readonly=\"true\" size=\"default\" (ngModelChange)=\"onRateChange($event)\"\n        *ngIf=\"roledIn && trip.status != 1 && trip.status != 4 && studentrate!=null && studentrate!=0 \">\n      </rating>\n      <br>\n      <p class='color-white' *ngIf=\"hideReview\">\n        {{'Review' | translate}}</p>\n      <br>\n      <ion-textarea *ngIf=\"hideReview\" [(ngModel)]=\"review\"\n        class=\"color-white\" rows=\"6\" cols=\"20\" placeholder=\"Enter any review here...\"></ion-textarea>\n      <ion-button expand=\"block\" *ngIf=\"hideReview\"\n        (click)=\"SaveRateReview()\" color=\"danger\">\n        Update</ion-button>\n\n\n      <ion-button expand=\"block\" *ngIf=\"roledIn && trip.status != 2 && trip.status != 3 && trip.status != 4\"\n        (click)=\"CancelTrip()\" color=\"danger\">\n        {{'Cancel_Trip' | translate}}</ion-button>\n      <br>\n      <ion-button expand=\"block\"\n        *ngIf=\"!roledIn && trip.status != 2 && trip.status != 3 && trip.status != 4 && trip.remain > 0\" (click)=\"Join()\"\n        color=\"primary\">\n        {{'Join' | translate}}</ion-button>\n        <div class='m-top-30 text-center' *ngIf=\"trip.status != 2 && trip.status != 3 && trip.status != 4 && trip.remain > 0\">\n          <div class='yellow-hr'></div>\n          <span class='mid-item bg-grey color-white'\n            style=\"background: #38393d;width: 120px;\">{{'Invite Friend' | translate}}</span>\n        </div>\n      <ion-input class=\"aux-input\" type=\"number\" style=\"color:white; border:solid white;\n      margin-bottom: 11px;\" *ngIf=\"trip.status != 2 && trip.status != 3 && trip.status != 4 && trip.remain > 0\"\n        [(ngModel)]=\"phone\" name='phone' placeholder=\"{{'Friend Phone' | translate}}\" ></ion-input>\n      <ion-button expand=\"block\" *ngIf=\"trip.status != 2 && trip.status != 3 && trip.status != 4 && trip.remain > 0\"\n        (click)=\"invitetrip()\" color=\"primary\">\n        {{'Invite Friend' | translate}}</ion-button>\n\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/trip-details/trip-details-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/trip-details/trip-details-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TripDetailsPageRoutingModule */

  /***/
  function srcAppTripDetailsTripDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripDetailsPageRoutingModule", function () {
      return TripDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _trip_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./trip-details.page */
    "./src/app/trip-details/trip-details.page.ts");

    var routes = [{
      path: '',
      component: _trip_details_page__WEBPACK_IMPORTED_MODULE_3__["TripDetailsPage"]
    }];

    var TripDetailsPageRoutingModule = function TripDetailsPageRoutingModule() {
      _classCallCheck(this, TripDetailsPageRoutingModule);
    };

    TripDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TripDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/trip-details/trip-details.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/trip-details/trip-details.module.ts ***!
    \*****************************************************/

  /*! exports provided: TripDetailsPageModule */

  /***/
  function srcAppTripDetailsTripDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripDetailsPageModule", function () {
      return TripDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./trip-details-routing.module */
    "./src/app/trip-details/trip-details-routing.module.ts");
    /* harmony import */


    var _trip_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./trip-details.page */
    "./src/app/trip-details/trip-details.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var TripDetailsPageModule = function TripDetailsPageModule() {
      _classCallCheck(this, TripDetailsPageModule);
    };

    TripDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"], _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TripDetailsPageRoutingModule"]],
      declarations: [_trip_details_page__WEBPACK_IMPORTED_MODULE_6__["TripDetailsPage"]]
    })], TripDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/trip-details/trip-details.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/trip-details/trip-details.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTripDetailsTripDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content rating ion-icon {\n  color: gray;\n}\nion-content rating ion-icon.filled {\n  fill: #26ff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1kZXRhaWxzL0Q6XFxNeSBEYXRhXFxSYXIgRmlsZXNcXE11YmFyYWtfVXBkYXRlXFxNdWJhcmFrXFxzdHVkZW50L3NyY1xcYXBwXFx0cmlwLWRldGFpbHNcXHRyaXAtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyaXAtZGV0YWlscy90cmlwLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsV0FBQTtBQ0ROO0FER007RUFFRSxhQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICByYXRpbmcge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuXHJcbiAgICAgICYuZmlsbGVkIHtcclxuICAgICAgICAvL2NvbG9yOiAjMjZmZjAwO1xyXG4gICAgICAgIGZpbGw6ICMyNmZmMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgcmF0aW5nIGlvbi1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG59XG5pb24tY29udGVudCByYXRpbmcgaW9uLWljb24uZmlsbGVkIHtcbiAgZmlsbDogIzI2ZmYwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/trip-details/trip-details.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/trip-details/trip-details.page.ts ***!
    \***************************************************/

  /*! exports provided: TripDetailsPage */

  /***/
  function srcAppTripDetailsTripDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripDetailsPage", function () {
      return TripDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service */
    "./src/app/service/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var TripDetailsPage = /*#__PURE__*/function () {
      function TripDetailsPage(location, activatRoute, stngs, router, alertSrv, dataSrv) {
        _classCallCheck(this, TripDetailsPage);

        this.location = location;
        this.activatRoute = activatRoute;
        this.stngs = stngs;
        this.router = router;
        this.alertSrv = alertSrv;
        this.dataSrv = dataSrv;
        this.phone = '';
        this.studentrate = 0;
        this.TripDetails = [];
        this.setDetails = [];
        this.roledIn = false;
        this.review = null;
        this.hideReview = true;
      }

      _createClass(TripDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// if (this.dataSrv.notiflag == true) {
          //   this.id = this.dataSrv.trips;
          //   this.GetTripDetails();
          //   this.hideReview = false;
          // }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.activatRoute.queryParams.subscribe(function (res) {
            _this.id = res["id"];
            console.log(_this.id);

            _this.GetTripDetails();

            _this.hideReview = false;
            _this.driver_id = localStorage.getItem("driver_id");
          });
        }
      }, {
        key: "CancelTrip",
        value: function CancelTrip() {
          var _this2 = this;

          this.alertSrv.show();
          var api = "api/cancel_student_set_trip";
          var body = {
            trip_id: parseInt(this.id),
            student_id: localStorage.getItem("driver_id")
          };
          this.dataSrv.httpPostMethod(api, body).then(function (res) {
            console.log(res);
            var temp = JSON.parse(res["data"]);
            var sms = JSON.parse(res.data);

            if (sms.success == true) {
              _this2.alertSrv.presentToast("Canceled Successfully", "success");

              _this2.location.back();
            } else {
              _this2.alertSrv.presentToast(sms.message, "danger");
            }

            _this2.alertSrv.hide();
          }, function (err) {
            if (err.status == -3 || err.status == -4) {
              _this2.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            } else {
              _this2.alertSrv.presentToast("Something wrong", "danger");
            }
          });
        }
      }, {
        key: "invitetrip",
        value: function invitetrip() {
          var _this3 = this;

          this.alertSrv.show();
          var api = "api/invitefriend";
          var body = {
            trip_id: parseInt(this.id),
            name: this.dataSrv.User_Name,
            num: this.phone
          };
          this.dataSrv.httpPostMethod(api, body).then(function (res) {
            console.log(res);
            var temp = JSON.parse(res["data"]);
            var sms = JSON.parse(res.data);

            if (sms.success == true) {
              _this3.alertSrv.presentToast("Invite Success", "success");

              _this3.location.back();
            } else {
              _this3.alertSrv.presentToast("Error in phone number", "danger");
            }

            _this3.alertSrv.hide();
          }, function (err) {
            if (err.status == -3 || err.status == -4) {
              _this3.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            } else {
              _this3.alertSrv.presentToast("Something wrong", "danger");
            }
          });
        }
      }, {
        key: "GetTripDetails",
        value: function GetTripDetails() {
          var _this4 = this;

          this.hideReview = false;
          this.alertSrv.show();
          var api = "api/one_trip_info";
          var body = {
            trip_id: parseInt(this.id)
          };
          this.dataSrv.httpPostMethod(api, body).then(function (res) {
            console.log(res);
            var temp = JSON.parse(res["data"]);
            console.log("temp", temp);
            var sms = JSON.parse(res.data);
            console.log("sms", sms);
            _this4.TripDetails = temp["infodata"];
            console.log("TripDetails", _this4.TripDetails);
            _this4.setDetails = temp["setdata"];
            console.log("setDetails", _this4.setDetails);
            var counter = 0;

            for (var x = 0; x < _this4.TripDetails.length; x++) {
              var location = _this4.dataSrv.getLocationDetails(parseInt(_this4.TripDetails[x]["destanation"]));

              if (location.length > 0) {
                _this4.TripDetails[x]["destanation"] = _this4.stngs.lang2 == 'ar' ? location[0].arabic_name : location[0].english_name;
              }

              if (_this4.TripDetails[x]["from_to_flag"] == 0) {
                var _temp = _this4.TripDetails[x]["source"];
                _this4.TripDetails[x]["source"] = _this4.TripDetails[x]["destanation"];
                _this4.TripDetails[x]["destanation"] = _temp;
              }
            }

            for (var i = 0; i < _this4.setDetails.length; i++) {
              if (_this4.setDetails[i].photo && _this4.setDetails[i].photo) {
                _this4.setDetails[i].photo = _this4.stngs.getSetting("baseURL") + _this4.setDetails[i].photo;
              }

              if (_this4.setDetails[i].status != 4 && _this4.setDetails[i].status != 3) {
                counter++;
              }
            }

            _this4.TripDetails[0]["remain"] = _this4.TripDetails[0]["number_of_set"] - counter;
            console.log(temp["infodata"]);
            console.log(_this4.setDetails);

            var studenttest = _this4.setDetails.filter(function (item) {
              return item.student_id == parseInt(localStorage.getItem("driver_id")) && item.status != 4;
            });

            console.log("FilterRes : ", studenttest);

            if (studenttest.length > 0) {
              _this4.roledIn = true; // if (studenttest[0].rate != 0 && studenttest[0].rate!=null && studenttest[0].rate>4) {
              // this.hideReview = true;
              // } else {
              // this.hideReview = false;
              //}

              _this4.studentState = studenttest[0].status;
              _this4.studentrate = studenttest[0].rate;
              _this4.RateValue = _this4.studentrate;
              _this4.studentreview = studenttest[0].review;
            }

            _this4.alertSrv.hide();
          }, function (err) {
            if (err.status == -3 || err.status == -4) {
              _this4.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            } else {
              _this4.alertSrv.presentToast("Something wrong", "danger");
            }
          });
        }
      }, {
        key: "Join",
        value: function Join() {
          var _this5 = this;

          this.alertSrv.show();
          var api = "api/booking_student_trip";
          var body = {
            trip_id: parseInt(this.id),
            student_id: parseInt(localStorage.getItem("driver_id")),
            lat: this.dataSrv.lat,
            lng: this.dataSrv.long
          };
          this.dataSrv.httpPostMethod(api, body).then(function (res) {
            console.log(res);
            var sms = JSON.parse(res.data);

            if (sms.success == true) {
              _this5.alertSrv.presentToast("Joined successfuly", "success");

              _this5.roledIn = true;

              _this5.alertSrv.hide();

              _this5.GetTripDetails();
            } else {
              _this5.alertSrv.hide();

              _this5.alertSrv.presentToast(sms.message, "danger");
            }
          }, function (err) {
            if (err.status == -3 || err.status == -4) {
              _this5.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            } else {
              _this5.alertSrv.presentToast("Something wrong", "danger");
            }
          });
        }
      }, {
        key: "onRateChange",
        value: function onRateChange(event) {
          // this.alertSrv.show();
          if (event > 4) {
            this.RateValue = event;
            this.SaveRateReview(event);
          } else {
            this.RateValue = event;
            this.hideReview = true;
          }
        }
      }, {
        key: "SaveRateReview",
        value: function SaveRateReview(event) {
          var _this6 = this;

          this.alertSrv.show();
          var api = "api/rate_trip";
          var body = {
            trip_id: parseInt(this.id),
            student_id: parseInt(localStorage.getItem("driver_id")),
            rate: this.RateValue,
            reveiw: this.review
          };
          this.dataSrv.httpPostMethod(api, body).then(function (res) {
            console.log(res);
            _this6.hideReview = false;

            _this6.alertSrv.hide();

            _this6.alertSrv.presentToast("Thanks", "success");
          }, function (err) {
            if (err.status == -3 || err.status == -4) {
              _this6.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            } else {
              _this6.alertSrv.presentToast("Something wrong", "danger");
            }
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.GetTripDetails();
          this.hideReview = false;
          setTimeout(function () {
            event.target.complete();
          }, 1000);
        }
      }]);

      return TripDetailsPage;
    }();

    TripDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    TripDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trip-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./trip-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/trip-details/trip-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./trip-details.page.scss */
      "./src/app/trip-details/trip-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], TripDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=trip-details-trip-details-module-es5.js.map