function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-trip-new-trip-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewTripNewTripPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'New_Trip' | translate}}</ion-title>\n  </ion-toolbar>\n  <ion-segment class=\"segment\" value=\"0\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"0\">\n      <ion-label>{{'From_Uni' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      <ion-label>{{'To_Uni' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content style=\"--background :#38393d; \">\n\n  <div id='sign-up-page' class='set-bg' class='bg-grey' style=\"height: 100vh;\">\n    <form [formGroup]=\"TripForm\" style=\"    margin-top: -20px;\">\n      <div class='content-box'>\n        <div id='login-from-box' class='m-top-20' ng-form='sign_up_form'>\n          <div class='main-container'>\n            <div class='input-box'>\n              <ion-datetime style=\"padding: 10px;\" formControlName=\"trip_date\" name='name'\n                placeholder=\"{{'Date' | translate}}\" class='color-yellow' displayFormat=\"MM/DD/YYYY HH:mm\"\n                min=\"2000-01-01\"></ion-datetime>\n              <ion-icon class='input-icon icon-20' name=\"information-circle-outline\"></ion-icon>\n            </div>\n            <!-- <br>\n            <div class='input-box'>\n              <ion-input formControlName=\"number_of_set\" name='number_of_set' placeholder=\"Sets\" class='color-yellow'\n                type=\"number\" required></ion-input>\n              <ion-icon name=\"aperture-outline\" class='input-icon icon-20'></ion-icon>\n            </div> -->\n            <!-- <br>\n\n            <div class='input-box'>\n              <ion-input name='pwd' formControlName=\"terms\" placeholder=\"Terms\" class='color-yellow' ng-minlength='6'\n                type='text' required></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"bookmark-outline\"></ion-icon>\n            </div> -->\n            <br>\n            <div *ngIf=\"currentsegmant == 1\">\n              <div class='input-box'>\n                <ion-input formControlName=\"source\" placeholder=\"{{'Source' | translate}}\" type='text'\n                  value=\"{{address}}\" class='color-yellow' ng-minlength=\"10\" ng-maxlength=\"10\" required\n                  (ionFocus)=\"GetMap(1)\">\n                </ion-input>\n                <ion-icon class='input-icon icon-20' name=\"map-outline\"></ion-icon>\n              </div>\n              <br>\n              <div class='input-box'>\n                <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='destanation' required\n                  placeholder=\"{{'Destanation' | translate}}\" class='color-yellow' formControlName=\"destanation\">\n                  <div *ngFor=\"let i of Locations\">\n                    <ion-select-option value=\"{{i.id}}\" *ngIf=\"stngs.lang2 == 'ar'\">{{i.arabic_name}}\n                    </ion-select-option>\n                    <ion-select-option value=\"{{i.id}}\" *ngIf=\"stngs.lang2 != 'ar'\">{{i.english_name}}\n                    </ion-select-option>\n                  </div>\n                </ion-select>\n                <ion-icon class='input-icon icon-20' name=\"navigate-outline\"></ion-icon>\n              </div>\n            </div>\n            <div *ngIf=\"currentsegmant == 0\">\n              <div class='input-box'>\n                <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='destanation' required\n                  placeholder=\"{{'Source' | translate}}\" class='color-yellow' formControlName=\"destanation\">\n                  <div *ngFor=\"let i of Locations\">\n                    <ion-select-option value=\"{{i.id}}\" *ngIf=\"stngs.lang2 == 'ar'\">{{i.arabic_name}}\n                    </ion-select-option>\n                    <ion-select-option value=\"{{i.id}}\" *ngIf=\"stngs.lang2 != 'ar'\">{{i.english_name}}\n                    </ion-select-option>\n                  </div>\n                </ion-select>\n                <ion-icon class='input-icon icon-20' name=\"navigate-outline\"></ion-icon>\n              </div>\n              <br>\n              <div class='input-box'>\n                <ion-input formControlName=\"source\" placeholder=\"{{'Destanation' | translate}}\" type='text'\n                  value=\"{{address}}\" class='color-yellow' ng-minlength=\"10\" ng-maxlength=\"10\" required\n                  (ionFocus)=\"GetMap(1)\">\n                </ion-input>\n                <ion-icon class='input-icon icon-20' name=\"map-outline\"></ion-icon>\n              </div>\n            </div>\n            <br>\n            <!-- <div class='input-box'>\n              <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='gender' required placeholder=\"Gender\"\n                class='color-yellow' formControlName=\"gender\">\n                <ion-select-option value=\"2\">Female</ion-select-option>\n                <ion-select-option value=\"1\">Male</ion-select-option>\n                <ion-select-option value=\"0\">Any</ion-select-option>\n              </ion-select>\n              <ion-icon class='input-icon icon-20' name=\"transgender-outline\"></ion-icon>\n            </div> -->\n            <!-- <br>\n            <div class='input-box'>\n              <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" name='price' required placeholder=\"Price\"\n                class='color-yellow' formControlName=\"price\">\n                <ion-select-option value=\"1\">1 JD</ion-select-option>\n                <ion-select-option value=\"1.5\">1.5 JD</ion-select-option>\n              </ion-select>\n             \n              <ion-icon class='input-icon icon-20' name=\"cash-outline\"></ion-icon>\n            </div> -->\n            <br>\n            <input (click)=\"Apply()\" class='btn bg-yellow color-white big-font m-top-butn-10' type='button'\n              value=\"{{'Apply' | translate}}\" />\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/new-trip/new-trip-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/new-trip/new-trip-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: NewTripPageRoutingModule */

  /***/
  function srcAppNewTripNewTripRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTripPageRoutingModule", function () {
      return NewTripPageRoutingModule;
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


    var _new_trip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-trip.page */
    "./src/app/new-trip/new-trip.page.ts");

    var routes = [{
      path: '',
      component: _new_trip_page__WEBPACK_IMPORTED_MODULE_3__["NewTripPage"]
    }];

    var NewTripPageRoutingModule = function NewTripPageRoutingModule() {
      _classCallCheck(this, NewTripPageRoutingModule);
    };

    NewTripPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewTripPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/new-trip/new-trip.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/new-trip/new-trip.module.ts ***!
    \*********************************************/

  /*! exports provided: NewTripPageModule */

  /***/
  function srcAppNewTripNewTripModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTripPageModule", function () {
      return NewTripPageModule;
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


    var _new_trip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-trip-routing.module */
    "./src/app/new-trip/new-trip-routing.module.ts");
    /* harmony import */


    var _new_trip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-trip.page */
    "./src/app/new-trip/new-trip.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var NewTripPageModule = function NewTripPageModule() {
      _classCallCheck(this, NewTripPageModule);
    };

    NewTripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _new_trip_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewTripPageRoutingModule"]],
      declarations: [_new_trip_page__WEBPACK_IMPORTED_MODULE_6__["NewTripPage"]]
    })], NewTripPageModule);
    /***/
  },

  /***/
  "./src/app/new-trip/new-trip.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/new-trip/new-trip.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewTripNewTripPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header .segment {\n  width: 100%;\n  background: #38393d;\n  height: 30px;\n}\nion-header .segment ion-label {\n  color: #f2c21e !important;\n}\nion-header .segment ion-segment-button {\n  height: 25px;\n  min-height: 15px;\n  width: 35px;\n  min-width: 19px;\n  font-size: 12px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --margin-end: 0px;\n  --margin-start: 0px;\n  --indicator-color-checked: #f2c21e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRyaXAvRDpcXE15IERhdGFcXFJhciBGaWxlc1xcTXViYXJha19VcGRhdGVcXE11YmFyYWtcXHN0dWRlbnQvc3JjXFxhcHBcXG5ldy10cmlwXFxuZXctdHJpcC5wYWdlLnNjc3MiLCJzcmMvYXBwL25ldy10cmlwL25ldy10cmlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBRENJO0VBQ0UseUJBQUE7QUNDTjtBRENJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvbmV3LXRyaXAvbmV3LXRyaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgLnNlZ21lbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzgzOTNkO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6ICNmMmMyMWUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgbWluLWhlaWdodDogMTVweDtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMTlweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAtLW1hcmdpbi1lbmQ6IDBweDtcclxuICAgICAgLS1tYXJnaW4tc3RhcnQ6IDBweDtcclxuICAgICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogI2YyYzIxZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciAuc2VnbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzgzOTNkO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5pb24taGVhZGVyIC5zZWdtZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZjJjMjFlICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIC5zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMjVweDtcbiAgbWluLWhlaWdodDogMTVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIG1pbi13aWR0aDogMTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLW1hcmdpbi1lbmQ6IDBweDtcbiAgLS1tYXJnaW4tc3RhcnQ6IDBweDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogI2YyYzIxZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/new-trip/new-trip.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/new-trip/new-trip.page.ts ***!
    \*******************************************/

  /*! exports provided: NewTripPage */

  /***/
  function srcAppNewTripNewTripPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTripPage", function () {
      return NewTripPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service */
    "./src/app/service/index.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/map-search/map-search.component */
    "./src/app/components/map-search/map-search.component.ts");
    /* harmony import */


    var _service_admob_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../service/admob.service */
    "./src/app/service/admob.service.ts");

    var NewTripPage = /*#__PURE__*/function () {
      function NewTripPage(datePipe, modalController, formBuilder, stngs, router, dataSrv, alertSrv, modal, geolocation, nativeGeocoder, adMobService) {
        _classCallCheck(this, NewTripPage);

        this.datePipe = datePipe;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.stngs = stngs;
        this.router = router;
        this.dataSrv = dataSrv;
        this.alertSrv = alertSrv;
        this.modal = modal;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.adMobService = adMobService;
        this.Locations = [];
        this.address = "";
        this.user = JSON.parse(localStorage.getItem("User"));
        this.currentsegmant = 0;
        this.Trips = [];
        this.Data = [];
        this.fcm = this.dataSrv.subscribePush();
        console.log(this.fcm);
        this.getLocations();
        this.buildTripForm();
        this.Locating1();
      }

      _createClass(NewTripPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = JSON.parse(localStorage.getItem("User"));
          this.buildTripForm();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.adMobService.ShowBanner();
        }
      }, {
        key: "getLocations",
        value: function getLocations() {
          var _this = this;

          this.alertSrv.show();
          var api = "api/list_uni";
          this.dataSrv.httpPostMethod(api, {}).then(function (res) {
            console.log(res);
            var temp = JSON.parse(res["data"]);
            var sms = JSON.parse(res.data);
            _this.Locations = temp["data"];

            _this.alertSrv.hide();
          }, function (err) {
            if (err.status == -3 || err.status == -4) {
              _this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            } else {
              _this.alertSrv.presentToast("Something wrong", "danger");
            }
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.user = JSON.parse(localStorage.getItem("User"));
          this.buildTripForm(); //console.log(document.querySelectorAll(".input-icon"))

          var elements = document.querySelectorAll(".input-icon");
          if (this.stngs.lang2 == 'ar') for (var i = 0; i < elements.length; i++) {
            elements[i].classList.replace("input-icon", "input-icon-rtl");
          }
        }
      }, {
        key: "GetMap",
        value: function GetMap(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _components_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_9__["MapSearchComponent"],
                      componentProps: {
                        'address': "",
                        'latt': null,
                        'long': null,
                        "id": id ? id : null
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (modalData) {
                      // if (this.currentsegmant == 1) {
                      _this2.TripForm.get("source").setValue(_this2.dataSrv.address);

                      _this2.address = _this2.dataSrv.address; // } else {
                      //   this.TripForm.get("destanation").setValue(this.dataSrv.address);
                      // }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "buildTripForm",
        value: function buildTripForm() {
          // if (this.currentsegmant == 1) {
          this.TripForm = this.formBuilder.group({
            trip_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            // number_of_set: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
            // terms: ['', [Validators.required]],
            source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            destanation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
          }); // } else {
          //   this.TripForm = this.formBuilder.group({
          //     trip_date: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
          //     // number_of_set: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
          //     // terms: ['', [Validators.required]],
          //     source: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
          //     destanation: [this.dataSrv.address, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
          //     // gender: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
          //     // price: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
          //     // status: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]]
          //   })
          // }
        }
      }, {
        key: "AddTrip",
        value: function AddTrip() {
          var _this3 = this;

          this.alertSrv.show();
          var TripData = {};
          this.fcm = this.dataSrv.subscribePush();
          console.log(this.fcm);
          TripData["trip_date"] = this.TripForm.get("trip_date").value;
          TripData["driver_id"] = localStorage.getItem("driver_id");
          TripData["number_of_set"] = this.TripForm.get("number_of_set").value;
          TripData["terms"] = this.TripForm.get("terms").value;
          TripData["source"] = this.TripForm.get("source").value;
          TripData["destanation"] = this.TripForm.get("destanation").value;
          TripData["gender"] = this.TripForm.get("gender").value;
          TripData["price"] = this.TripForm.get("price").value;
          TripData["status"] = 1;
          console.log(TripData);
          var api = "api/newtrip";
          this.dataSrv.httpPostMethod(api, TripData).then(function (res) {
            console.log(res);
            var sms = JSON.parse(res.data);

            if (sms.success == true) {
              _this3.alertSrv.presentToast("You Trip added.", "success");
            } else {
              _this3.alertSrv.presentToast(sms.message, "danger");
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
        key: "delete",
        value: function _delete(imageID) {
          if (imageID == 1) {
            this.dataSrv.photo = null;
            this.dataSrv.photo_name = null;
          } else if (imageID == 2) {
            this.dataSrv.card_id = null;
            this.dataSrv.card_id_name = null;
          } else if (imageID == 3) {
            this.dataSrv.student_id = null;
            this.dataSrv.student_id_name = null;
          } else if (imageID == 4) {
            this.dataSrv.driver_licence = null;
            this.dataSrv.driver_licence_name = null;
          } else if (imageID == 5) {
            this.dataSrv.car_id = null;
            this.dataSrv.car_id_name = null;
          }
        }
      }, {
        key: "ll",
        value: function ll() {
          if (this.dataSrv.FilteredTrips.length < 1) {
            this.alertSrv.presentToast("No Trips Found", "danger");
          } else {
            this.router.navigate(["../new-trip-result"]);
          }
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(evt) {
          console.log(evt.detail.value);
          this.currentsegmant = evt.detail.value;
          this.buildTripForm();
        }
      }, {
        key: "Apply",
        value: function Apply() {
          this.dataSrv.FilteredTrips = [];
          this.dataSrv.Trips = [];
          var d = this.datePipe.transform(this.TripForm.get("trip_date").value, "dd-MM-yyyy HH:mm");
          this.GetTrips(this.TripForm.get("destanation").value, d);
        }
      }, {
        key: "GetTrips",
        value: function GetTrips(des, fil) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var api, body;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertSrv.loadingCtrl.create({
                      duration: 6000
                    });

                  case 2:
                    this.alertSrv.loading = _context3.sent;
                    this.alertSrv.loading.present();
                    api = "api/list_trip_withfilter";
                    body = {
                      gender: this.user.gender,
                      destanation: des,
                      fildate: fil,
                      from_to_flag: this.currentsegmant
                    };
                    console.log(body);
                    this.dataSrv.httpPostMethod(api, body).then(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var temp, sms, tempData;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                temp = JSON.parse(res["data"]);
                                sms = JSON.parse(res.data);
                                this.Data = temp["data"];
                                console.log(this.Data);
                                tempData = temp["data"];
                                this.alertSrv.hide();
                                _context2.next = 8;
                                return this.calculating();

                              case 8:
                                _context2.next = 10;
                                return this.CheckTripDates();

                              case 10:
                                this.Trips = this.Data.filter(function (item) {
                                  return item.distance <= 4;
                                });
                                this.dataSrv.FilteredTrips = this.Trips;
                                this.dataSrv.Trips = this.Data;
                                console.log(this.dataSrv.Trips);
                                _context2.next = 16;
                                return this.ll();

                              case 16:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, function (err) {
                      _this4.alertSrv.presentToast("Something wrong", "danger");
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "notification",
        value: function notification() {
          this.router.navigate(["../notification"]);
        }
      }, {
        key: "CheckTripDates",
        value: function CheckTripDates() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var i, date1;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    i = 0;

                  case 1:
                    if (!(i < this.Data.length)) {
                      _context4.next = 11;
                      break;
                    }

                    date1 = new Date(this.Data[i].trip_date);
                    date1.setMinutes(date1.getMinutes() + 15);

                    if (!(date1.getTime() < new Date().getTime() && this.Data[i].status == 1)) {
                      _context4.next = 8;
                      break;
                    }

                    this.Data[i].status = 2;
                    _context4.next = 8;
                    return this.changeStaus(this.Data[i].id);

                  case 8:
                    i++;
                    _context4.next = 1;
                    break;

                  case 11:
                    this.Trips = this.Data.filter(function (item) {
                      return item.status == 1;
                    });
                    this.alertSrv.hide();

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "changeStaus",
        value: function changeStaus(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var api, body;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    //changestatus
                    api = "api/changestatus";
                    body = {
                      trip_id: id,
                      status: 2
                    };
                    this.dataSrv.httpPostMethod(api, body).then(function (res) {
                      var temp = JSON.parse(res["data"]);
                      var sms = JSON.parse(res.data);
                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "calculating",
        value: function calculating() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this5 = this;

            var options, myLattLang, _loop, i;

            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.alertSrv.show();
                    _context7.next = 3;
                    return this.Locating();

                  case 3:
                    options = {
                      useLocale: true,
                      maxResults: 5
                    };
                    myLattLang = {
                      lat: this.lat,
                      lng: this.long
                    };
                    _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
                      var lat, lng, location;
                      return regeneratorRuntime.wrap(function _loop$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              if (_this5.Data[i].photo != null) _this5.Data[i].photo = _this5.stngs.getSetting("baseURL") + _this5.Data[i].photo;
                              lat = void 0, lng = void 0;
                              location = _this5.dataSrv.getLocationDetails(parseInt(_this5.Data[i]["destanation"]));

                              if (location.length > 0) {
                                _this5.Data[i]["destanation"] = _this5.stngs.lang2 == 'ar' ? location[0].arabic_name : location[0].english_name;
                              } // if (this.Data[i]["from_to_flag"] == 1) {
                              //   //   console.log(location)
                              // } else {
                              //   let temp = this.Data[i]["source"];
                              //   this.Data[i]["source"] = this.Data[i]["destanation"];
                              //   this.Data[i]["destanation"] = temp;
                              //  // this.Data[i]["distance"] = this.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, location[0].lat, location[0].lng);
                              // }


                              _context6.next = 6;
                              return _this5.nativeGeocoder.forwardGeocode(_this5.Data[i]["source"], options).then(function (result) {
                                lat = result[0].latitude;
                                lng = result[0].longitude;
                                _this5.Data[i]["distance"] = _this5.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, lat, lng);
                              }).catch(function (error) {
                                return console.log("error", error);
                              });

                            case 6:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _loop);
                    });
                    i = 0;

                  case 7:
                    if (!(i < this.Data.length)) {
                      _context7.next = 12;
                      break;
                    }

                    return _context7.delegateYield(_loop(i), "t0", 9);

                  case 9:
                    i++;
                    _context7.next = 7;
                    break;

                  case 12:
                    this.alertSrv.hide();

                  case 13:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "Locating",
        value: function Locating() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.geolocation.getCurrentPosition().then(function (resp) {
                      _this6.lat = resp.coords.latitude;
                      _this6.long = resp.coords.longitude;
                      _this6.dataSrv.lat = resp.coords.latitude.toString();
                      _this6.dataSrv.long = resp.coords.longitude.toString();
                      var options = {
                        useLocale: true,
                        maxResults: 5
                      };

                      _this6.nativeGeocoder.reverseGeocode(parseFloat(_this6.dataSrv.lat), parseFloat(_this6.dataSrv.long), options).then(function (result) {
                        _this6.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , " + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea + " , " + result[0].countryName;
                      }).catch(function (error) {
                        return console.log(error);
                      });
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "Locating1",
        value: function Locating1() {
          var _this7 = this;

          return;
          this.geolocation.getCurrentPosition().then(function (resp) {
            _this7.dataSrv.lat = resp.coords.latitude.toString();
            _this7.dataSrv.long = resp.coords.longitude.toString();
            var options = {
              useLocale: true,
              maxResults: 5
            };

            _this7.nativeGeocoder.reverseGeocode(parseFloat(_this7.dataSrv.lat), parseFloat(_this7.dataSrv.long), options).then(function (result) {
              console.log(JSON.stringify(result[0]));
              _this7.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , " + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea + " , " + result[0].countryName;
              _this7.dataSrv.SourceAddress = _this7.dataSrv.address;
            }).catch(function (error) {
              return console.log(error);
            });
          });
        }
      }, {
        key: "getDistanceFromLatLonInKm",
        value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
          var R = 6371; // Radius of the earth in km

          var dLat = this.deg2rad(lat2 - lat1); // deg2rad below

          var dLon = this.deg2rad(lon2 - lon1);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km

          return d;
        }
      }, {
        key: "deg2rad",
        value: function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }
      }, {
        key: "Go",
        value: function Go(trip) {
          this.router.navigate(["../trip-details"], {
            queryParams: {
              id: trip
            }
          });
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          var _this8 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            _this8.dataSrv.lat = resp.coords.latitude.toString();
            _this8.dataSrv.long = resp.coords.longitude.toString();
            var options = {
              useLocale: true,
              maxResults: 5
            };

            _this8.nativeGeocoder.reverseGeocode(parseFloat(_this8.dataSrv.lat), parseFloat(_this8.dataSrv.long), options).then(function (result) {
              console.log(JSON.stringify(result[0]));
              _this8.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , " + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea + " , " + result[0].countryName;
              _this8.dataSrv.SourceAddress = _this8.dataSrv.address;
            }).catch(function (error) {
              return console.log(error);
            });
          });
          this.adMobService.hideBanner();
          setTimeout(function () {
            _this8.adMobService.ShowInterstitial();
          }, 1500);
        }
      }]);

      return NewTripPage;
    }();

    NewTripPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
      }, {
        type: _service_admob_service__WEBPACK_IMPORTED_MODULE_10__["AdmobService"]
      }];
    };

    NewTripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-trip',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-trip.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-trip.page.scss */
      "./src/app/new-trip/new-trip.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"], _service_admob_service__WEBPACK_IMPORTED_MODULE_10__["AdmobService"]])], NewTripPage);
    /***/
  },

  /***/
  "./src/app/service/admob.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/admob.service.ts ***!
    \******************************************/

  /*! exports provided: AdmobService */

  /***/
  function srcAppServiceAdmobServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmobService", function () {
      return AdmobService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/admob-free/ngx */
    "./node_modules/@ionic-native/admob-free/ngx/index.js"); //IMPORT PLATFORM SO WE CAN START ADMOB AS SOON AS IT'S READY.
    //IMPORT WHAT WE NEED FROM ADMOBFREE PLUGIN.


    var AdmobService = /*#__PURE__*/function () {
      function AdmobService(platform, admobFree) {
        var _this9 = this;

        _classCallCheck(this, AdmobService);

        this.platform = platform;
        this.admobFree = admobFree; //BANNER CONFIG

        this.bannerConfig = {
          size: 'LARGE_BANNER',
          autoShow: true,
          // id: "ca-app-pub-3940256099942544/6300978111"
          id: "ca-app-pub-6505060464041221/5457187768"
        }; //INTERSTITIAL CONFIG

        this.interstitialConfig = {
          autoShow: false,
          // id: "ca-app-pub-3940256099942544/1033173712"
          id: "ca-app-pub-6505060464041221/4295331095"
        }; //LOAD ADS AT PLATFORM READY PROMISE.

        platform.ready().then(function () {
          //BANNER
          _this9.admobFree.banner.config(_this9.bannerConfig); //INTERSTITIAL


          _this9.admobFree.interstitial.config(_this9.interstitialConfig);

          _this9.admobFree.interstitial.prepare().then(function () {
            console.log('INTERSTIAL LOADED');
          }).catch(function (e) {
            return console.log('PROBLEM LOADING INTERSTITIAL: ', e);
          });
        });
      }

      _createClass(AdmobService, [{
        key: "ShowBanner",
        value: function ShowBanner() {
          //CHECK AND SHOW BANNER
          this.admobFree.banner.prepare().then(function () {
            console.log('BANNER LOADED');
          }).catch(function (e) {
            return console.log('PROBLEM LOADING BANNER: ', e);
          });
        }
      }, {
        key: "ShowInterstitial",
        value: function ShowInterstitial() {
          var _this10 = this;

          //CHECK AND SHOW INTERSTITIAL
          this.admobFree.interstitial.isReady().then(function () {
            //AT .ISREADY SHOW 
            _this10.admobFree.interstitial.show().then(function () {
              console.log('INTERSTITIAL LOADED');
            }).catch(function (e) {
              return console.log('PROBLEM LOADING REWARD VIDEO: ', e);
            });
          }).catch(function (e) {
            return console.log('PROBLEM LOADING REWARD VIDEO: ', e);
          });
        }
      }, {
        key: "hideBanner",
        value: function hideBanner() {
          this.admobFree.banner.hide();
        }
      }]);

      return AdmobService;
    }();

    AdmobService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobFree"]
      }];
    };

    AdmobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobFree"]])], AdmobService);
    /***/
  }
}]);
//# sourceMappingURL=new-trip-new-trip-module-es5.js.map