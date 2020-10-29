function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'Home' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"color: #f2c21e;\" (click)=\"notification()\">\n        <ion-icon name=\"notifications-circle-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-segment class=\"segment\" value=\"{{currentsegment}}\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"1\">\n      <ion-label>{{'Pending' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-label>{{'On_Process' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content style=\"--background :#38393d; \">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"{{'Refreshing Data ...'|translate}}\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list style=\"margin-top:-10px; padding-top: 20px;background: transparent;\">\n    <!-- <ion-item style=\"margin-bottom: 5px;\" detail (click)=\"Go(trip.id)\" *ngFor=\"let trip of Trips\">\n      <ion-label>\n        <h2>Date : {{trip.trip_date}}</h2>\n        <h3>From : {{trip.source}}</h3>\n        <h3>Sets : {{trip.number_of_set}}</h3>\n        <p>To : {{trip.destanation}}</p>\n      </ion-label>\n    </ion-item> -->\n    <ion-card style=\"border-radius: 15px;background: black; margin: 10px;\" (click)=\"Go(trip.id)\"\n      *ngFor=\"let trip of Trips\">\n      <ion-item style=\"--background: #717171; border-bottom: 3px solid #f2c21e;\">\n        <ion-avatar slot=\"start\" style=\"height: 60px;width: 60px;\">\n          <img *ngIf=\"trip.photo != null\" src=\"{{trip.photo}}\" style=\"border-radius: 50%;height: 60px;width: 60px;\"\n            style=\"opacity: 0.8;\">\n          <img *ngIf=\"trip.photo == null\" src=\"assets/img/noImage.jpg\"\n            style=\"border-radius: 50%;height: 60px;width: 60px;\" style=\"opacity: 0.8;\">\n        </ion-avatar>\n        <div style=\"color: white;margin: 5px;width: 100%;position: absolute;top: 10%;\"><span\n            style=\"color:#f2c21e;\">{{'Driver' | translate}} :</span>\n          {{trip.name}}</div>\n        <br>\n        <div style=\"color: white;margin: 5px;width: 100%;position: absolute;top: 50%;\"><span\n            style=\"color:#f2c21e;\">{{'Phone' | translate}} :</span>\n          {{trip.phone}}</div>\n      </ion-item>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row style=\"color: #f2c21e;\">\n            <ion-col>\n              <h2 style=\"font-size: 16px;\">{{'Date' | translate}} : <span\n                  style=\"color:white;\">{{trip.trip_date |date: 'dd/MM/yyyy'}} /\n                  {{trip.trip_date |date: 'HH:mm'}}</span>\n              </h2>\n              <h3 style=\"font-size: 16px;\">{{'From' | translate}} : <span style=\"color:white;\">{{trip.source}}</span>\n              </h3>\n            </ion-col>\n            <ion-col>\n              <h3 style=\"font-size: 16px;\">{{'Sets' | translate}} : <span\n                  style=\"color:white;\">{{trip.number_of_set}}</span>\n              </h3>\n              <h3 style=\"font-size: 16px;\">{{'Gender' | translate}} : <span *ngIf=\"trip.gender==1\"\n                  style=\"color:white;\">{{'Male' | translate}} </span>\n                <span *ngIf=\"trip.gender==2\" style=\"color:white;\">{{'Female' | translate}} </span>\n                <span *ngIf=\"trip.gender==3\" style=\"color:white;\">{{'Mix' | translate}} </span>\n              </h3>\n              <h3 style=\"font-size: 16px;\">{{'To' | translate}} : <span style=\"color:white;\">{{trip.destanation}}</span>\n              </h3>\n\n            </ion-col>\n          </ion-row>\n          <!-- <div style=\"width: 100% ; height: 2px;background: darkgoldenrod\"></div> -->\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    <!-- <ion-card style=\"margin-bottom: 5px;\n    margin: 10px;\n    padding: 5px;\n    background: #1d1d1d;\" detail (click)=\"Go(trip.id)\" *ngFor=\"let trip of Trips\">\n      <ion-row style=\"    color: #f2c21e;\">\n        <div style=\"padding-top: 5%;\">\n          <img *ngIf=\"trip.photo != null\" src=\"{{trip.photo}}\" class=\"round-img\" style=\"opacity: 0.8;\">\n          <img *ngIf=\"trip.photo == null\" src=\"assets/img/noImage.jpg\" class=\"round-img\" style=\"opacity: 0.8;\">\n        </div>\n        <ion-col>\n          <h2 style=\"font-size: 16px;\">{{'Date' | translate}} : <span style=\"color:white;\">{{trip.trip_date}}</span>\n          </h2>\n          <h3 style=\"font-size: 16px;\">{{'From' | translate}} : <span style=\"color:white;\">{{trip.source}}</span></h3>\n        </ion-col>\n        <ion-col>\n          <h3 style=\"font-size: 16px;\">{{'Sets' | translate}} : <span style=\"color:white;\">{{trip.number_of_set}}</span>\n          </h3>\n          <h3 style=\"font-size: 16px;\">{{'To' | translate}} : <span style=\"color:white;\">{{trip.destanation}}</span>\n          </h3>\n        </ion-col>\n      </ion-row>\n    </ion-card> -->\n  </ion-list>\n  <div *ngIf=\"Trips.length < 1\" style=\"text-align: center;\n  margin-top: 50%;\n  padding: 10px;\n  color: white;\n\">{{'NoTrips' | translate}}</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header .segment {\n  width: 100%;\n  background: #38393d;\n  height: 30px;\n}\nion-header .segment ion-label {\n  color: #f2c21e !important;\n}\nion-header .segment ion-segment-button {\n  height: 25px;\n  min-height: 15px;\n  width: 35px;\n  min-width: 19px;\n  font-size: 12px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --margin-end: 0px;\n  --margin-start: 0px;\n  --indicator-color-checked: #f2c21e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTXkgRGF0YVxcUmFyIEZpbGVzXFxNdWJhcmFrX1VwZGF0ZVxcTXViYXJha1xcc3R1ZGVudC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURDSTtFQUNFLHlCQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAuc2VnbWVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzODM5M2Q7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBjb2xvcjogI2YyYzIxZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAxNXB4O1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgbWluLXdpZHRoOiAxOXB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIC0tbWFyZ2luLWVuZDogMHB4O1xyXG4gICAgICAtLW1hcmdpbi1zdGFydDogMHB4O1xyXG4gICAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjZjJjMjFlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24taGVhZGVyIC5zZWdtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzODM5M2Q7XG4gIGhlaWdodDogMzBweDtcbn1cbmlvbi1oZWFkZXIgLnNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNmMmMyMWUgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgLnNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtaW4taGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMzVweDtcbiAgbWluLXdpZHRoOiAxOXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tbWFyZ2luLWVuZDogMHB4O1xuICAtLW1hcmdpbi1zdGFydDogMHB4O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjZjJjMjFlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service */
    "./src/app/service/index.ts");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(geolocation, activatRoute, nativeGeocoder, menu, stngs, router, alertSrv, dataSrv) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.geolocation = geolocation;
        this.activatRoute = activatRoute;
        this.nativeGeocoder = nativeGeocoder;
        this.menu = menu;
        this.stngs = stngs;
        this.router = router;
        this.alertSrv = alertSrv;
        this.dataSrv = dataSrv;
        this.currentsegment = 1;
        this.user = JSON.parse(localStorage.getItem("User"));
        this.Trips = [];
        this.Data = [];
        menu.enable(true); // this.Locating();

        this.activatRoute.queryParams.subscribe(function (res) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.dataSrv.getLocations();

                  case 2:
                    this.id = res["id"];
                    this.GetTrips();
                    this.currentsegment = 1;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
        this.dataSrv.getLocations();
      }

      _createClass(HomePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menu.enable(true);
          this.user = JSON.parse(localStorage.getItem("User"));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(true); // this.user = JSON.parse(localStorage.getItem("User"));
          // this.GetTrips();
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(evt) {
          var _this2 = this;

          this.currentsegment = evt.detail.value;
          var temp = this.Data.filter(function (item) {
            return item.status == parseInt(evt.detail.value) && item.distance <= 4;
          });
          this.Trips = temp.filter(function (item) {
            return item.gender == _this2.user.gender || item.gender == 3;
          });
        }
      }, {
        key: "GetTrips",
        value: function GetTrips() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var api, body;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertSrv.loadingCtrl.create({
                      duration: 5000
                    });

                  case 2:
                    this.alertSrv.loading = _context3.sent;
                    this.alertSrv.loading.present();
                    api = "api/list_trip_withparam";
                    body = {
                      gender: this.user.gender
                    }; //console.log("body : ", body)

                    this.dataSrv.httpPostMethod(api, body).then(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _this4 = this;

                        var temp;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                temp = JSON.parse(res["data"]); //let sms = JSON.parse(res.data);

                                this.Data = temp["data"]; // let tempData: [] = temp["data"]

                                this.alertSrv.hide();
                                _context2.next = 5;
                                return this.calculating();

                              case 5:
                                _context2.next = 7;
                                return this.CheckTripDates();

                              case 7:
                                this.allocateData();
                                this.Trips = this.Data.filter(function (item) {
                                  return item.status == _this4.currentsegment && item.distance <= 4 && (item.gender == _this4.user.gender || item.gender == 3);
                                });
                                this.dataSrv.FilteredTrips = this.Trips;
                                this.dataSrv.Trips = this.Data; // console.log(res)
                                //console.log("Data : ", this.Data)

                              case 11:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, function (err) {
                      if (err.status == -3 || err.status == -4) {
                        _this3.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
                      } else {
                        _this3.alertSrv.presentToast("Something wrong", "danger");
                      }
                    });

                  case 7:
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
        key: "allocateData",
        value: function allocateData() {
          for (var i = 0; i < this.Data.length; i++) {
            if (this.Data[i].from_to_flag == 0) {
              this.dataSrv.TripsFromUni.push(this.Data[i]);
            } else {
              this.dataSrv.TripsToUni.push(this.Data[i]);
            }
          }
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
                      var lat, lng, location, temp;
                      return regeneratorRuntime.wrap(function _loop$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              if (_this5.Data[i].photo != null) _this5.Data[i].photo = _this5.stngs.getSetting("baseURL") + _this5.Data[i].photo;
                              lat = void 0, lng = void 0;
                              location = _this5.dataSrv.getLocationDetails(parseInt(_this5.Data[i]["destanation"]));

                              if (location.length > 0) {
                                _this5.Data[i]["destanation"] = _this5.stngs.lang2 == 'ar' ? location[0].arabic_name : location[0].english_name;
                              }

                              if (!(_this5.Data[i]["from_to_flag"] == 1)) {
                                _context6.next = 9;
                                break;
                              }

                              _context6.next = 7;
                              return _this5.nativeGeocoder.forwardGeocode(_this5.Data[i]["source"], options).then(function (result) {
                                lat = result[0].latitude;
                                lng = result[0].longitude;
                                _this5.Data[i]["distance"] = _this5.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, lat, lng);
                              }).catch(function (error) {
                                return console.log("error", error);
                              });

                            case 7:
                              _context6.next = 13;
                              break;

                            case 9:
                              temp = _this5.Data[i]["source"];
                              _this5.Data[i]["source"] = _this5.Data[i]["destanation"];
                              _this5.Data[i]["destanation"] = temp;
                              _this5.Data[i]["distance"] = _this5.getDistanceFromLatLonInKm(myLattLang.lat, myLattLang.lng, location[0].lat, location[0].lng);

                            case 13:
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
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this7 = this;

          this.GetTrips();
          setTimeout(function () {
            var temp = _this7.Data.filter(function (item) {
              return item.status == _this7.currentsegment && item.distance <= 4;
            });

            _this7.Trips = temp.filter(function (item) {
              return item.gender == _this7.user.gender || item.gender == 3;
            });
            event.target.complete();
          }, 1000);
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
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map