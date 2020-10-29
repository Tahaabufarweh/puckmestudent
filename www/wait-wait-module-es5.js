function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wait-wait-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wait/wait.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wait/wait.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWaitWaitPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background : #38393d \">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f2c21e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #f2c21e;text-align: center;font-size: 18px;\">{{'Holding' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background :#38393d; \">\n  <div>\n    <img src=\"assets/img/logo.png\" style=\"max-width: 65%; width:50%;\n    border: 0;\n    margin-left: 26%;\n    margin-right:26%;\n    margin-top:10%;\" />\n    <br>\n    <p style=\"color:white; text-align:center; width:100%;\">{{'HoldingAcc' | translate}}</p>\n    <br>\n    <div style=\"padding-left:4%; padding-right:4%; padding-top:2%; width: 71%;\n      margin: auto; border:none;\">\n      <input (click)=\"Edit()\" class='btn bg-yellow color-white big-font m-top-butn-10' type='button'\n        value=\"{{'Edit_Profile' | translate}}\" />\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/wait/wait-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/wait/wait-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: WaitPageRoutingModule */

  /***/
  function srcAppWaitWaitRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WaitPageRoutingModule", function () {
      return WaitPageRoutingModule;
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


    var _wait_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wait.page */
    "./src/app/wait/wait.page.ts");

    var routes = [{
      path: '',
      component: _wait_page__WEBPACK_IMPORTED_MODULE_3__["WaitPage"]
    }];

    var WaitPageRoutingModule = function WaitPageRoutingModule() {
      _classCallCheck(this, WaitPageRoutingModule);
    };

    WaitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WaitPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/wait/wait.module.ts":
  /*!*************************************!*\
    !*** ./src/app/wait/wait.module.ts ***!
    \*************************************/

  /*! exports provided: WaitPageModule */

  /***/
  function srcAppWaitWaitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WaitPageModule", function () {
      return WaitPageModule;
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


    var _wait_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wait-routing.module */
    "./src/app/wait/wait-routing.module.ts");
    /* harmony import */


    var _wait_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wait.page */
    "./src/app/wait/wait.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var WaitPageModule = function WaitPageModule() {
      _classCallCheck(this, WaitPageModule);
    };

    WaitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wait_routing_module__WEBPACK_IMPORTED_MODULE_5__["WaitPageRoutingModule"]],
      declarations: [_wait_page__WEBPACK_IMPORTED_MODULE_6__["WaitPage"]]
    })], WaitPageModule);
    /***/
  },

  /***/
  "./src/app/wait/wait.page.scss":
  /*!*************************************!*\
    !*** ./src/app/wait/wait.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppWaitWaitPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhaXQvd2FpdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/wait/wait.page.ts":
  /*!***********************************!*\
    !*** ./src/app/wait/wait.page.ts ***!
    \***********************************/

  /*! exports provided: WaitPage */

  /***/
  function srcAppWaitWaitPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WaitPage", function () {
      return WaitPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service */
    "./src/app/service/index.ts");

    var WaitPage = /*#__PURE__*/function () {
      function WaitPage(alertSrv, dataSrv, stngs, router, menu, plt) {
        _classCallCheck(this, WaitPage);

        this.alertSrv = alertSrv;
        this.dataSrv = dataSrv;
        this.stngs = stngs;
        this.router = router;
        this.menu = menu;
        this.plt = plt;
        menu.enable(true);
        this.plt.backButton.subscribeWithPriority(9999, function () {});
        this.GetInfo();
      }

      _createClass(WaitPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(true);
        }
      }, {
        key: "Edit",
        value: function Edit() {
          this.router.navigate(["../profile"]);
        }
      }, {
        key: "GetInfo",
        value: function GetInfo() {
          var _this = this;

          //
          var api = "api/student_info";
          var body = {
            student_id: parseInt(localStorage.getItem("driver_id"))
          };
          this.dataSrv.httpPostMethod(api, body).then(function (res) {
            console.log(res);
            var temp = JSON.parse(res["data"]);
            var sms = JSON.parse(res.data);
            console.log(temp["data"]);

            if (temp["data"] && temp["data"] != {} && temp["data"].length > 0) {
              localStorage.setItem("active_non", temp["data"][0].active_non);
              temp["data"][0].car_id = temp["data"][0].car_id ? _this.stngs.getSetting("baseURL") + temp["data"][0].car_id : null;
              temp["data"][0].driver_licence = temp["data"][0].driver_licence ? _this.stngs.getSetting("baseURL") + temp["data"][0].driver_licence : null;
              temp["data"][0].photo = temp["data"][0].photo ? _this.stngs.getSetting("baseURL") + temp["data"][0].photo : null;
              temp["data"][0].card_id = temp["data"][0].card_id ? _this.stngs.getSetting("baseURL") + temp["data"][0].card_id : null;
              temp["data"][0].student_id = temp["data"][0].student_id ? _this.stngs.getSetting("baseURL") + temp["data"][0].student_id : null;
              localStorage.setItem("User", JSON.stringify(temp["data"][0]));

              if (temp["data"][0].active_non == 1) {
                _this.dataSrv.waiting = 0;

                _this.router.navigate(["../home"], {
                  replaceUrl: true
                });
              } else {
                _this.dataSrv.waiting = 1; // this.router.navigate(["../wait"], { replaceUrl: true })
              }

              _this.alertSrv.hide();
            } else {
              _this.alertSrv.presentToast(sms.message, "danger");
            }
          }, function (err) {
            _this.alertSrv.presentToast("Something wrong", "danger");
          });
        }
      }]);

      return WaitPage;
    }();

    WaitPage.ctorParameters = function () {
      return [{
        type: _service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    WaitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wait',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wait.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wait/wait.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wait.page.scss */
      "./src/app/wait/wait.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], WaitPage);
    /***/
  }
}]);
//# sourceMappingURL=wait-wait-module-es5.js.map