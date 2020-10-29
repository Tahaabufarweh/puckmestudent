function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" id=\"menu\">\n      <div style=\"height: 15%;background: #38393d;\" align=\"center\">\n        <img align=\"center\" *ngIf=\"dataSrv.photo != null\" src=\"{{dataSrv.photo}}\" class=\"round-img\" style=\"    max-width: 95%;\n        border: 0;\n        width: 80px;\n        margin-right: 65%;\n        height: 80px;\n    \">\n        <img align=\"center\" *ngIf=\"dataSrv.photo == null\" src=\"assets/img/noImage.jpg\" class=\"round-img\" style=\"    max-width: 95%;\n        border: 0;\n        width: 80px;\n        margin-right: 65%;\n        height: 80px;\n    \">\n      </div>\n      <div style=\"color:#f2c21e;position: absolute;top: 2%;left: 35%;font-size: small;font-weight: 500;\">\n        {{dataSrv.showdriverid}}\n      </div>\n      <div style=\"color:#f2c21e;position: absolute;top: 6%;left: 35%;font-size: small;font-weight: 500;\">\n        {{dataSrv.User_Name}}\n      </div>\n      <div style=\"color:white;position: absolute;top: 10%;left: 35%; font-size: small;font-weight: 500;\">\n        {{dataSrv.Phone}}\n      </div>\n      <div style=\"width: 100% ; height: 2px;background: #9f7c5e\"></div>\n      <ion-content style=\"--background: #494a4d ;\">\n        <ion-list style=\"background: transparent;\">\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item (click)=\"Go('home')\" *ngIf=\"dataSrv.waiting == 0\" style=\"--background: transparent;color: #f2c21e;\">\n              <ion-icon style=\"padding: 10px;\" slot=\"start\" name=\"home\"></ion-icon>\n              <ion-label>\n                {{'Home' | translate}}\n              </ion-label>\n            </ion-item>\n            <ion-item (click)=\"Go('profile')\" style=\"--background: transparent;color: #f2c21e;\">\n              <ion-icon style=\"padding: 10px;\" slot=\"start\" name=\"people\"></ion-icon>\n              <ion-label>\n                {{'My_Profile' | translate}}\n              </ion-label>\n            </ion-item>\n            <ion-item (click)=\"Go('mytrips')\" *ngIf=\"dataSrv.waiting == 0\"  style=\"--background: transparent;color: #f2c21e;\">\n              <ion-icon style=\"padding: 10px;\" slot=\"start\" name=\"train-outline\"></ion-icon>\n              <ion-label>\n                {{'My_Trips' | translate}}\n              </ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"dataSrv.waiting == 0\" (click)=\"Go('new-trip')\"\n              style=\"--background: transparent;color: #f2c21e;\">\n              <ion-icon style=\"padding: 10px;\" slot=\"start\" name=\"add-circle\"></ion-icon>\n              <ion-label>\n                {{'New_Trip' | translate}}\n              </ion-label>\n            </ion-item>\n            <ion-item (click)=\"Go('payment')\" style=\"--background: transparent;color: #f2c21e;\">\n              <ion-icon style=\"padding: 10px;\" slot=\"start\" name=\"newspaper-outline\"></ion-icon>\n              <ion-label>\n                {{'Upload_Payment' | translate}}\n              </ion-label>\n            </ion-item>\n            <ion-item (click)=\"logout()\" style=\"--background: transparent;color: #f2c21e;\">\n              <ion-icon style=\"padding: 10px;\" slot=\"start\" name=\"log-out\"></ion-icon>\n              <ion-label>\n                {{'Logout' | translate}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      <div style=\"width: 100% ; height: 2px;background: #9f7c5e\"></div>\n      <ion-footer>\n        <ion-toolbar no-lines style=\"--background: #38393d;;\">\n          <ion-title></ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button style=\"color: #f2c21e;margin: 12px;\" *ngIf=\"settings.lang2 == 'ar'\" fill=\"outline\"\n              class=\"langBtn\" (click)=\"setLang(1)\">EN\n            </ion-button>\n            <ion-button style=\"color: #f2c21e;margin: 12px;\" *ngIf=\"settings.lang2 == 'en'\" fill=\"outline\"\n              class=\"langBtn\" (click)=\"setLang(0)\">ع\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsConfirmConfirmComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- -->\n<ion-content padding class=\"animated fadeIn login auth-page\" style=\" background: url('../../assets/imgs/bg.jpg') no-repeat !important;\nbackground-size: cover !important;\">\n  <!-- Logo -->\n  <div padding-horizontal text-center class=\"animated fadeInDown\">\n    <div class=\"login-content\">\n      <div class=\"logo\"></div>\n      <h2 style=\"color: #9f7c5e;\" ion-text class=\"text-primary\">\n        <strong>Start</strong> With Us\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class=\"list-form\">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name=\"code-working-outline\" item-start class=\"text-primary\"></ion-icon>\n        Code\n        </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"data\" name=\"data\" [ngModelOptions]=\"{require: true}\"></ion-input>\n      </ion-item>\n    </form>\n    <div>\n      <button ion-button icon-start block outline class=\"loginbtn\" color=\"dark\" (click)=\"close(data)\" tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        Done\n      </button>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map-search/map-search.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map-search/map-search.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMapSearchMapSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\" placeholder=\"Search for a place\">\n    </ion-searchbar>\n  </ion-toolbar>\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" style=\"opacity:0.8\"></div>\n  <ion-input hidden=\"true\" id=\"latbox\" #latbox></ion-input>\n  <ion-input hidden=\"true\" id=\"lngbox\" #lngbox></ion-input>\n  <ion-button fill=\"block\" color=\"secondary\" (click)=\"GoTo(latbox.value,lngbox.value)\" style=\"margin-top:2%;\">\n    {{\"Add Address\" | translate}}\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div id='login-page' style=\"height: 100%;\" class='set-bg' full-height>\n    <div class='head-bar bg-black'>\n      <p class='vertical-middle text-center color-yellow big-font'>\n        {{'SIGN_IN' | translate}} </p>\n      <div class='close-icon' (click)=\"closeLogin()\">\n        <img class='vertical-middle icon-25 ' src='assets/img/icons/close.png' />\n      </div>\n    </div>\n\n    <div class='content-box'>\n      <div id='login-from-box' class='vertical-middle' ng-form='login_form'>\n        <div class='main-container'>\n          <div class='input-box'>\n            <ion-input name='mail' ng-model='login.mail' [(ngModel)]=\"user_name\" required\n              placeholder=\"{{'Enter_user_name' | translate}}\" class='color-yellow' type='text'></ion-input>\n            <img class='input-icon icon-20' src='assets/img/icons/mobile.png' />\n          </div>\n          <br>\n          <div class='input-box'>\n            <ion-input name='pwd' ng-model='login.pwd' ng-trim=\"true\" required [(ngModel)]=\"password\"\n              placeholder=\"{{'Enter_Password' | translate}}\" class='color-yellow' type='password'></ion-input>\n            <img class='input-icon icon-20' src='assets/img/icons/lock.png' />\n          </div>\n          <ion-input (click)='Login(user_name,password)' style=\"text-align: center;\"\n            class='btn bg-yellow color-white m-top-20 big-font' type='button' value=\"{{'SIGN_IN' | translate}}\">\n          </ion-input>\n          <div class='text-center m-top-20'>\n            <!-- <a class='color-white '>Forgot Password?</a> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>signup</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content id='sign-up-page'> \n  <!-- <ion-button (click)=\"testUpload()\">Go</ion-button> -->\n  <div id='sign-up-page' class='set-bg' class='bg-grey' style=\"height: 145vh;\">\n    <form [formGroup]=\"DriverForm\" id='sign-up-page'>\n      <div class='head-bar bg-black'>\n        <p class='vertical-middle text-center color-yellow big-font'>\n          {{'SIGN_UP' | translate}}</p>\n        <div class='close-icon' (click)=\"closeSignUp1()\">\n          <img class='vertical-middle icon-25 ' src='assets/img/icons/close.png' />\n        </div>\n      </div>\n      <div style=\"padding-top: 5%;\" (click)=\"dataSrv.presentActionSheet(1)\" align=\"center\">\n        <img *ngIf=\"dataSrv.photo != null\" src=\"{{dataSrv.photo}}\" class=\"round-img\" style=\"opacity: 0.8;\">\n        <img *ngIf=\"dataSrv.photo == null\" src=\"assets/img/noImage.jpg\" class=\"round-img\" style=\"opacity: 0.8;\">\n      </div>\n      <div class='content-box'>\n        <div id='login-from-box' class='m-top-20' ng-form='sign_up_form'>\n          <div class='main-container'>\n            <div class='input-box'>\n              <ion-input formControlName=\"name\" name='name' placeholder=\"{{'Name' | translate}}\" class='color-yellow'\n                type='text' required></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"information-circle-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/user.png' /> -->\n            </div>\n            <br>\n            <div class='input-box'>\n            <ion-select style=\"padding: 10px;\" placeholder=\"Select One\" okText=\"{{'Ok' |translate}}\" cancelText=\"{{'Cancel' |translate}}\" name='gender' required placeholder=\"{{'Gender' | translate}}\"\n                class='color-yellow' formControlName=\"gender\">\n                <ion-select-option value=\"2\">{{'Female' | translate}}</ion-select-option>\n                <ion-select-option value=\"1\">{{'Male' | translate}} </ion-select-option>\n            </ion-select>\n            </div>\n            <br>\n            <div class='input-box'>\n              <ion-input formControlName=\"user_name\" name='user_name' placeholder=\"{{'User_Name' | translate}}\"\n                class='color-yellow' type=\"text\" required></ion-input>\n              <ion-icon name=\"person\" class='input-icon icon-20'></ion-icon>\n\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/user.png' /> -->\n            </div>\n            <br>\n\n            <div class='input-box'>\n              <ion-input name='pwd' formControlName=\"password\" placeholder=\"{{'Password' | translate}}\"\n                class='color-yellow' ng-minlength='6' type='password' required></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"keypad-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/lock.png' /> -->\n            </div>\n            <br>\n            <div class='input-box'>\n              <ion-input formControlName=\"phone\" placeholder=\"{{'Phone' | translate}}\" type='number'\n                class='color-yellow' type='number' ng-minlength=\"10\" ng-maxlength=\"10\" required></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"call-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/mobile.png' /> -->\n            </div>\n            <br>\n\n            <div class='input-box'>\n              <ion-input name='mail' formControlName=\"email\" required ng-model='signUp.mail'\n                placeholder=\"{{'Mail' | translate}}\" class='color-yellow' type='email'></ion-input>\n              <ion-icon class='input-icon icon-20' name=\"mail-open-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/mail.png' /> -->\n            </div>\n\n            <br>\n\n            <div class='input-box'>\n              <ion-input name='address' required placeholder=\"{{'Address' | translate}}\" class='color-yellow'\n                type='text' formControlName=\"address\" value=\"{{dataSrv.address}}\" (ionFocus)=\"dataSrv.GetMap()\">\n              </ion-input>\n              <ion-icon class='input-icon icon-20' name=\"navigate-circle-outline\"></ion-icon>\n              <!-- <img class='input-icon icon-20' src='assets/img/icons/mail.png' /> -->\n            </div>\n            <br>\n            <ion-row size=\"12\">\n              <ion-col size=\"6\" style=\"margin-top: 10px;color: #caa21b;text-align: center;\">\n                <div class=\"container\" align=\"center\">\n                  <ion-buttons *ngIf=\"dataSrv.card_id != null\">\n                    <ion-button class=\"btn\" (click)=\"delete(2)\">\n                      x\n                    </ion-button>\n                  </ion-buttons>\n                  <img id=\"myImg\" *ngIf=\"dataSrv.card_id != null\" src=\"{{dataSrv.card_id}}\" class=\"addImg\"\n                    imageViewer />\n                  <img id=\"myImg\" *ngIf=\"dataSrv.card_id == null\" src=\"assets/img/addImage.jpg\" class=\"addImg\"\n                    (click)=\"dataSrv.presentActionSheet(2)\" />\n                </div>\n                <span style=\"font-size: small;\">{{'Personnel_Card' | translate}}</span>\n              </ion-col>\n              <ion-col size=\"6\" style=\"margin-top: 10px;color: #caa21b;text-align: center;\">\n                <div class=\"container\" align=\"center\">\n                  <ion-buttons *ngIf=\"dataSrv.student_id != null\">\n                    <ion-button class=\"btn\" (click)=\"delete(3)\">\n                      x\n                    </ion-button>\n                  </ion-buttons>\n                  <img id=\"myImg\" *ngIf=\"dataSrv.student_id != null\" src=\"{{dataSrv.student_id}}\" class=\"addImg\"\n                    imageViewer />\n                  <img id=\"myImg\" *ngIf=\"dataSrv.student_id == null\" src=\"assets/img/addImage.jpg\" class=\"addImg\"\n                    (click)=\"dataSrv.presentActionSheet(3)\" />\n                </div>\n                <span style=\"font-size: small;\">{{'Student_Card' | translate}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-item style=\"--background:transparent\">\n              <a style=\"color: #caa21b;text-decoration: underline;margin: 5px;\"\n                href=\"http://thurayaalnajjar.info/terms.html\">{{'Terms_roles' | translate}}</a>\n              <ion-checkbox slot=\"start\" [(ngModel)]=\"isChecked\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\n            </ion-item>\n            <input (click)=\"Register()\" class='btn bg-yellow color-white big-font m-top-butn-10' type='button'\n              value=\"{{'SIGN_UP' | translate}}\" />\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: './intro',
      pathMatch: 'full'
    }, {
      path: 'thanks',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | thanks-thanks-module */
        "thanks-thanks-module").then(__webpack_require__.bind(null,
        /*! ./thanks/thanks.module */
        "./src/app/thanks/thanks.module.ts")).then(function (m) {
          return m.ThanksPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'start',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | start-start-module */
        "start-start-module").then(__webpack_require__.bind(null,
        /*! ./start/start.module */
        "./src/app/start/start.module.ts")).then(function (m) {
          return m.StartPageModule;
        });
      }
    }, {
      path: 'intro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | intro-intro-module */
        "intro-intro-module").then(__webpack_require__.bind(null,
        /*! ./intro/intro.module */
        "./src/app/intro/intro.module.ts")).then(function (m) {
          return m.IntroPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'wait',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | wait-wait-module */
        "wait-wait-module").then(__webpack_require__.bind(null,
        /*! ./wait/wait.module */
        "./src/app/wait/wait.module.ts")).then(function (m) {
          return m.WaitPageModule;
        });
      }
    }, {
      path: 'trip-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | trip-details-trip-details-module */
        "trip-details-trip-details-module").then(__webpack_require__.bind(null,
        /*! ./trip-details/trip-details.module */
        "./src/app/trip-details/trip-details.module.ts")).then(function (m) {
          return m.TripDetailsPageModule;
        });
      }
    }, {
      path: 'payment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | payment-payment-module */
        "payment-payment-module").then(__webpack_require__.bind(null,
        /*! ./payment/payment.module */
        "./src/app/payment/payment.module.ts")).then(function (m) {
          return m.PaymentPageModule;
        });
      }
    }, {
      path: 'mytrips',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mytrips-mytrips-module */
        "mytrips-mytrips-module").then(__webpack_require__.bind(null,
        /*! ./mytrips/mytrips.module */
        "./src/app/mytrips/mytrips.module.ts")).then(function (m) {
          return m.MytripsPageModule;
        });
      }
    }, {
      path: 'new-trip',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | new-trip-new-trip-module */
        "new-trip-new-trip-module").then(__webpack_require__.bind(null,
        /*! ./new-trip/new-trip.module */
        "./src/app/new-trip/new-trip.module.ts")).then(function (m) {
          return m.NewTripPageModule;
        });
      }
    }, {
      path: 'new-trip-result',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | new-trip-result-new-trip-result-module */
        "new-trip-result-new-trip-result-module").then(__webpack_require__.bind(null,
        /*! ./new-trip-result/new-trip-result.module */
        "./src/app/new-trip-result/new-trip-result.module.ts")).then(function (m) {
          return m.NewTripResultPageModule;
        });
      }
    }, {
      path: 'notification',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | notification-notification-module */
        "notification-notification-module").then(__webpack_require__.bind(null,
        /*! ./notification/notification.module */
        "./src/app/notification/notification.module.ts")).then(function (m) {
          return m.NotificationPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXE15IERhdGFcXFJhciBGaWxlc1xcTXViYXJha19VcGRhdGVcXE11YmFyYWtcXHN0dWRlbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyREFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQ0pGOztBRE9BO0VBQ0UsaUNBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59IiwiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service */
    "./src/app/service/index.ts");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, location, translate, router, menu, settings, // public events: Events,
      alertSrv, geolocation, dataSrv, nativeGeocoder) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.location = location;
        this.translate = translate;
        this.router = router;
        this.menu = menu;
        this.settings = settings;
        this.alertSrv = alertSrv;
        this.geolocation = geolocation;
        this.dataSrv = dataSrv;
        this.nativeGeocoder = nativeGeocoder;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "LoadUserData",
        value: function LoadUserData(user) {
          console.log(user);
          this.dataSrv.photo = user.photo;
          this.dataSrv.User_Name = user.user_name;
          this.dataSrv.Phone = user.phone;
          this.dataSrv.showdriverid = localStorage.getItem("driver_id");
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.callFunctions();

            _this.platform.backButton.subscribe(function () {
              if (_this.router.url == "/home" || _this.router.url == "/wait" || _this.router.url == "/intro") {
                if (window.confirm("Do you want to exit ?")) {
                  navigator['app'].exitApp();
                }
              } else {
                _this.location.back();
              }
            }); // this.events.subscribe('changeMenu', (value) => {
            //   console.log("value")
            //   if (this.settings.lang2 == 'ar') {
            //     document.getElementById("menu").setAttribute("side", "start");
            //   } else {
            //     document.getElementById("menu").setAttribute("side", "end");
            //   }
            // });


            var user = JSON.parse(localStorage.getItem("User"));
            if (user) _this.dataSrv.User_Name = user.name;
          });
        }
      }, {
        key: "Go",
        value: function Go(page) {
          this.router.navigate(['./' + page]);
          this.menu.close();
        }
      }, {
        key: "setTransLang",
        value: function setTransLang(lang) {
          this.translate.defaultLang = lang;
          this.translate.setDefaultLang(lang);
          this.translate.use(lang);
        }
      }, {
        key: "callFunctions",
        value: function callFunctions() {
          this.Locating();
          this.settings.loadSettings(); // this.settings.doThemeChange();

          this.settings.doLangChange();
          this.navigate();
        }
      }, {
        key: "setLang",
        value: function setLang(lang) {
          this.alertSrv.show();
          this.settings.setSetting("currentLanguage", '' + lang);
          this.settings.doLangChange();
          this.alertSrv.hide();
        }
      }, {
        key: "navigate",
        value: function navigate() {
          this.dataSrv.showdriverid = localStorage.getItem("driver_id");
          console.log('dd' + this.dataSrv.showdriverid);
          var driver_id = localStorage.getItem("driver_id");
          var active_non = localStorage.getItem("active_non");
          console.log(driver_id);

          if (driver_id && driver_id != undefined) {
            this.dataSrv.subscribePush();
            var user = JSON.parse(localStorage.getItem("User"));

            if (user) {
              this.LoadUserData(user);
            }

            if (active_non == "1") {
              this.dataSrv.waiting = 0;
              this.router.navigate(["../home"], {
                replaceUrl: true
              });
            } else {
              this.dataSrv.waiting = 1;
              this.router.navigate(["../wait"], {
                replaceUrl: true
              });
            }
          } else {
            this.router.navigate(["../intro"], {
              replaceUrl: true
            });
          }
        }
      }, {
        key: "Locating",
        value: function Locating() {
          var _this2 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            _this2.dataSrv.lat = resp.coords.latitude.toString();
            _this2.dataSrv.long = resp.coords.longitude.toString();
            console.log(_this2.dataSrv.lat, _this2.dataSrv.long);
            var options = {
              useLocale: true,
              maxResults: 5
            };

            _this2.nativeGeocoder.reverseGeocode(parseFloat(_this2.dataSrv.lat), parseFloat(_this2.dataSrv.long), options).then(function (result) {
              console.log(JSON.stringify(result[0]));
              _this2.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , " + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea + " , " + result[0].countryName;
            }).catch(function (error) {
              return console.log(error);
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("driver_id");
          localStorage.removeItem("active_non");
          this.router.navigate(["./intro"], {
            replaceUrl: true
          });
          this.dataSrv.resetLocalStorage();
          this.dataSrv.resrAllImages();
          this.menu.close();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _login_login_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.page */
    "./src/app/login/login.page.ts");
    /* harmony import */


    var _login_login_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login.module */
    "./src/app/login/login.module.ts");
    /* harmony import */


    var _signup_signup_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./signup/signup.module */
    "./src/app/signup/signup.module.ts");
    /* harmony import */


    var _signup_signup_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./signup/signup.page */
    "./src/app/signup/signup.page.ts");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/admob-free/ngx */
    "./node_modules/@ionic-native/admob-free/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    function HttpLoaderFactory(httpClient) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_26__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [_login_login_page__WEBPACK_IMPORTED_MODULE_12__["LoginPage"], _signup_signup_page__WEBPACK_IMPORTED_MODULE_15__["SignupPage"]],
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"]]
        }
      }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_13__["LoginPageModule"], _signup_signup_module__WEBPACK_IMPORTED_MODULE_14__["SignupPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeGeocoder"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_16__["FCM"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_17__["HTTP"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_21__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_19__["FilePath"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_22__["Facebook"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__["FileTransfer"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_23__["GooglePlus"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], // AdMobPro,
      _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_24__["AdMobFree"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _map_search_map_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-search/map-search.component */
    "./src/app/components/map-search/map-search.component.ts");
    /* harmony import */


    var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./confirm/confirm.component */
    "./src/app/components/confirm/confirm.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_5__["MapSearchComponent"], _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      exports: [_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_5__["MapSearchComponent"], _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"]],
      entryComponents: [_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_5__["MapSearchComponent"], _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/confirm/confirm.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/confirm/confirm.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsConfirmConfirmComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".round-img {\n  border-radius: 50%;\n  margin: 5px;\n  height: 150px;\n}\n\n.regBtn {\n  margin: 10px;\n  width: 80%;\n  height: 40px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtL0Q6XFxNeSBEYXRhXFxSYXIgRmlsZXNcXE11YmFyYWtfVXBkYXRlXFxNdWJhcmFrXFxzdHVkZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb25maXJtXFxjb25maXJtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS9jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kLWltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLnJlZ0J0biB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iLCIucm91bmQtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDVweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnJlZ0J0biB7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/confirm/confirm.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/confirm/confirm.component.ts ***!
    \*********************************************************/

  /*! exports provided: ConfirmComponent */

  /***/
  function srcAppComponentsConfirmConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
      return ConfirmComponent;
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


    var src_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service */
    "./src/app/service/index.ts");

    var ConfirmComponent = /*#__PURE__*/function () {
      function ConfirmComponent(modal, alertSrv) {
        _classCallCheck(this, ConfirmComponent);

        this.modal = modal;
        this.alertSrv = alertSrv;
      }

      _createClass(ConfirmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(code) {
          if (code != null && code == parseInt(localStorage.getItem("ConfirmCode"))) {//  this.event.publish("OpenHome");
          } else {
            this.alertSrv.presentToast("الكود الذى ادخلته غير صحيح من فضلك تأكد من صحته", "danger");
          }
        }
      }]);

      return ConfirmComponent;
    }();

    ConfirmComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirm',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirm.component.scss */
      "./src/app/components/confirm/confirm.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])], ConfirmComponent);
    /***/
  },

  /***/
  "./src/app/components/map-search/map-search.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/map-search/map-search.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMapSearchMapSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 90%;\n  width: 100%;\n}\n\nion-button {\n  margin-top: 2%;\n  --background: #24a524;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAtc2VhcmNoL0Q6XFxNeSBEYXRhXFxSYXIgRmlsZXNcXE11YmFyYWtfVXBkYXRlXFxNdWJhcmFrXFxzdHVkZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYXAtc2VhcmNoXFxtYXAtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hcC1zZWFyY2gvbWFwLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFFSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC1zZWFyY2gvbWFwLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlvbi1idXR0b25cclxue1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyNGE1MjQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiI21hcCB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAtLWJhY2tncm91bmQ6ICMyNGE1MjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/map-search/map-search.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/map-search/map-search.component.ts ***!
    \***************************************************************/

  /*! exports provided: MapSearchComponent */

  /***/
  function srcAppComponentsMapSearchMapSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapSearchComponent", function () {
      return MapSearchComponent;
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


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var src_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service */
    "./src/app/service/index.ts");

    var MapSearchComponent = /*#__PURE__*/function () {
      function MapSearchComponent(modalCtrl, geolocation, nativeGeocoder, dataSrv, zone, alertSrv) {
        _classCallCheck(this, MapSearchComponent);

        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.dataSrv = dataSrv;
        this.zone = zone;
        this.alertSrv = alertSrv;
        this.autocomplete = {
          input: ''
        };
        this.autocompleteItems = [];
      }

      _createClass(MapSearchComponent, [{
        key: "updateSearchResults",
        value: function updateSearchResults() {
          var _this3 = this;

          if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
          }

          this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.input,
            componentRestrictions: {
              country: 'JO'
            }
          }, function (predictions, status) {
            _this3.autocompleteItems = [];

            _this3.zone.run(function () {
              predictions.forEach(function (prediction) {
                _this3.autocompleteItems.push(prediction);
              });
            });
          });
        }
      }, {
        key: "selectSearchResult",
        value: function selectSearchResult(item) {
          var _this4 = this;

          console.log(this.id);
          var options = {
            useLocale: true,
            maxResults: 5
          };
          console.log(item.description);
          this.nativeGeocoder.forwardGeocode(item.description, options).then(function (result) {
            _this4.latt = result[0].latitude;
            _this4.long = result[0].longitude;
            _this4.dataSrv.lat = result[0].latitude;
            _this4.dataSrv.long = result[0].longitude;
            _this4.address = item.description;

            if (_this4.id == null) {
              _this4.dataSrv.address = item.description;
            } else if (_this4.id == 1) {
              _this4.dataSrv.SourceAddress = item.description;
            } else if (_this4.id == 2) {
              _this4.dataSrv.DestAddress = item.description;
            }

            _this4.autocomplete.input = _this4.dataSrv.address;
            console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
            document.getElementById("latbox").setAttribute("value", result[0].latitude);
            document.getElementById("lngbox").setAttribute("value", result[0].longitude);
            var galle = {
              lat: parseFloat(_this4.latt),
              lng: parseFloat(_this4.long)
            };
            _this4.map = new google.maps.Map(_this4.mapElement["first"].nativeElement, {
              zoom: 10,
              center: galle,
              mapTypeId: 'roadmap'
            });

            _this4.addMarker();
          }).catch(function (error) {
            return console.log(error);
          });
          this.autocompleteItems = [];
          this.autocomplete.input = "";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.autocomplete.input = "";
          this.Locating();
          this.autocomplete.input = this.dataSrv.address;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.autocomplete.input = "";
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.Locating();
          this.autocomplete.input = this.dataSrv.address;
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "Locating",
        value: function Locating() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var galle;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.geolocation.getCurrentPosition().then(function (resp) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this6 = this;

                        var options;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.latt = resp.coords.latitude.toString();
                                this.long = resp.coords.longitude.toString();
                                options = {
                                  useLocale: true,
                                  maxResults: 5
                                };
                                _context.next = 5;
                                return this.nativeGeocoder.reverseGeocode(parseFloat(this.latt), parseFloat(this.long), options).then(function (result) {
                                  _this6.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , " + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea + " , " + result[0].countryName;
                                  _this6.dataSrv.SourceAddress = _this6.dataSrv.address;
                                }).catch(function (error) {
                                  return console.log(error);
                                });

                              case 5:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 2:
                    if (this.id == null) {
                      this.dataSrv.address = this.address;
                    } else if (this.id == 1) {
                      this.dataSrv.SourceAddress = this.address;
                    } else if (this.id == 2) {
                      this.dataSrv.DestAddress = this.address;
                    }

                    this.dataSrv.address = this.address;
                    console.log("add" + this, this.dataSrv.address);
                    galle = {
                      lat: parseFloat(this.latt),
                      lng: parseFloat(this.long)
                    };
                    this.map = new google.maps.Map(this.mapElement["first"].nativeElement, {
                      zoom: 10,
                      center: galle,
                      mapTypeId: 'roadmap'
                    });
                    this.alertSrv.hide();
                    this.addMarker();

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addMarker",
        value: function addMarker() {
          this.marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            //icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
            position: this.map.getCenter()
          });
          var content = this.dataSrv.address;
          this.addInfoWindow(this.marker, content);
        }
      }, {
        key: "addInfoWindow",
        value: function addInfoWindow(marker, content) {
          var _this7 = this;

          var infoWindow = new google.maps.InfoWindow({
            content: content
          });
          google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this7.map, marker);
          });
          google.maps.event.addListener(marker, 'dragend', function () {
            document.getElementById("latbox").setAttribute("value", marker.getPosition().lat());
            document.getElementById("lngbox").setAttribute("value", marker.getPosition().lng());
            _this7.latt = marker.getPosition().lat();
            _this7.long = marker.getPosition().lng();

            _this7.getMarkerPosition(marker.getPosition());
          });
        }
      }, {
        key: "getMarkerPosition",
        value: function getMarkerPosition(latlng) {
          var _this8 = this;

          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            'latLng': latlng
          }, function (results, status) {
            _this8.address = results[0].formatted_address;

            if (_this8.id == null) {
              _this8.dataSrv.address = _this8.address;
            } else if (_this8.id == 1) {
              _this8.dataSrv.SourceAddress = _this8.address;
            } else if (_this8.id == 2) {
              _this8.dataSrv.DestAddress = _this8.address;
            }

            _this8.dataSrv.address = _this8.address;
            _this8.autocomplete.input = _this8.address;
            console.log("mp-" + _this8.address);
            console.log(results[0].address_components);
          });
        }
      }, {
        key: "GoTo",
        value: function GoTo(lat, lng) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this9 = this;

            var options;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // this.Locating();
                    this.dataSrv.lat = lat;
                    this.dataSrv.long = lng;
                    this.alertSrv.show();
                    options = {
                      useLocale: true,
                      maxResults: 5
                    };
                    _context3.next = 6;
                    return this.nativeGeocoder.reverseGeocode(parseFloat(lat), parseFloat(lng), options).then(function (result) {
                      console.log(JSON.stringify(result[0]));
                      _this9.dataSrv.address = result[0].subThoroughfare + " " + result[0].thoroughfare + " , " + result[0].locality + " , " + result[0].subAdministrativeArea + " , " + result[0].administrativeArea + " , " + result[0].countryName;
                      console.log("Choosed Position : ", _this9.dataSrv.address);
                      _this9.dataSrv.address = _this9.address;
                    }).catch(function (error) {
                      return console.log(error);
                    });

                  case 6:
                    this.alertSrv.hide();
                    this.dismiss();

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return MapSearchComponent;
    }();

    MapSearchComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
      }, {
        type: src_app_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('map'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapSearchComponent.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MapSearchComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MapSearchComponent.prototype, "latt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MapSearchComponent.prototype, "long", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MapSearchComponent.prototype, "id", void 0);
    MapSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map-search/map-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map-search.component.scss */
      "./src/app/components/map-search/map-search.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"], src_app_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], src_app_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])], MapSearchComponent);
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service */
    "./src/app/service/index.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(dataSrv, alertSrv, fb, stngs, menu, modal, router) {
        _classCallCheck(this, LoginPage);

        this.dataSrv = dataSrv;
        this.alertSrv = alertSrv;
        this.fb = fb;
        this.stngs = stngs;
        this.menu = menu;
        this.modal = modal;
        this.router = router;
        this.menu.enable(true);
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(true);
          this.fcm = this.dataSrv.subscribePush();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //console.log(document.querySelectorAll(".input-icon"))
          var elements = document.querySelectorAll(".input-icon");
          if (this.stngs.lang2 == "ar") for (var i = 0; i < elements.length; i++) {
            elements[i].classList.replace("input-icon", "input-icon-rtl");
          }
        }
      }, {
        key: "Login",
        value: function Login(user_name, password) {
          var _this10 = this;

          this.fcm = this.dataSrv.subscribePush();

          if (user_name == "" || user_name == undefined || user_name == null || password == "" || password == undefined || password == null) {
            this.alertSrv.presentToast("Please, Complete Your Data", "danger");
            return;
          }

          this.alertSrv.show();
          var api = "api/login_student";
          var body = {
            user_name: user_name,
            password: password,
            fcm: this.fcm
          };
          this.dataSrv.httpPostMethod(api, body).then(function (res) {
            console.log(res);
            var temp = JSON.parse(res["data"]);
            var sms = JSON.parse(res.data);
            console.log(temp["data"]);

            if (sms.success == true) {
              localStorage.setItem("User_Old", JSON.stringify(temp["data"][0]));
              localStorage.setItem("driver_id", temp["data"][0].id);
              localStorage.setItem("active_non", temp["data"][0].active_non);
              temp["data"][0].photo = temp["data"][0].photo ? _this10.stngs.getSetting("baseURL") + temp["data"][0].photo : null;
              temp["data"][0].card_id = temp["data"][0].card_id ? _this10.stngs.getSetting("baseURL") + temp["data"][0].card_id : null;
              temp["data"][0].student_id = temp["data"][0].student_id ? _this10.stngs.getSetting("baseURL") + temp["data"][0].student_id : null;
              localStorage.setItem("User", JSON.stringify(temp["data"][0]));
              _this10.dataSrv.photo = temp["data"][0].photo;
              _this10.dataSrv.User_Name = temp["data"][0].user_name;
              _this10.dataSrv.Phone = temp["data"][0].phone;

              if (temp["data"][0].active_non == 1) {
                _this10.dataSrv.waiting = 0;

                _this10.router.navigate(["../home"], {
                  replaceUrl: true
                });
              } else {
                _this10.dataSrv.waiting = 1;

                _this10.router.navigate(["../wait"], {
                  replaceUrl: true
                });
              }

              _this10.alertSrv.hide();

              _this10.closeLogin();
            } else {
              _this10.alertSrv.presentToast(sms.message, "danger");
            }
          }, function (err) {
            if (err.status == -3 || err.status == -4) {
              _this10.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
            } else {
              _this10.alertSrv.presentToast("Something wrong", "danger");
            }
          });
        }
      }, {
        key: "closeLogin",
        value: function closeLogin() {
          this.modal.dismiss();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"], _service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/service/alert.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/alert.service.ts ***!
    \******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServiceAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // import { TranslateService } from '@ngx-translate/core';
    // import { HTTP } from '@ionic-native/http/ngx';
    // import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
    // import { FileChooser } from '@ionic-native/file-chooser/ngx';
    // import { FilePath } from '@ionic-native/file-path/ngx';
    // import { File } from '@ionic-native/file/ngx';
    // import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
    // import { MapSearchComponent } from '../components/map-search/map-search.component';
    // import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';


    var AlertService = /*#__PURE__*/function () {
      function AlertService(loadingCtrl, toastController) {
        _classCallCheck(this, AlertService);

        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
      }

      _createClass(AlertService, [{
        key: "show",
        value: function show() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingCtrl.create({
                      duration: 2000
                    });

                  case 2:
                    this.loading = _context4.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "longShow",
        value: function longShow() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingCtrl.create({});

                  case 2:
                    this.loading = _context5.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          try {
            this.loading.dismiss();
          } catch (error) {}
        }
      }, {
        key: "autoHide",
        value: function autoHide(time) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingCtrl.create({
                      duration: time
                    });

                  case 2:
                    this.loading = _context6.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "presentToastWithOptions",
        value: function presentToastWithOptions(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var toast;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.toastController.create({
                      message: msg,
                      position: 'top',
                      buttons: [{
                        text: 'تم',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context7.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg, color) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var toast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.toastController.create({
                      message: msg,
                      color: color,
                      duration: 2000
                    });

                  case 2:
                    toast = _context8.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], AlertService);
    /***/
  },

  /***/
  "./src/app/service/authentication.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/service/authentication.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServiceAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/service/settings.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http, router, menuCtrl, setting) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.setting = setting;
        this.requests = [];
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(username, password, baseURL) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'login': 'loginPage'
            })
          };
          console.log("AuthService");
          console.log(username + "   " + password);
          console.log("".concat(baseURL, "/token"), "grant_type=password&username=".concat(username, "&password=").concat(password));
          return this.http.post("".concat(baseURL, "/token"), "grant_type=password&username=".concat(username, "&password=").concat(password), httpOptions);
        }
      }, {
        key: "grantSession",
        value: function grantSession() {
          //this.setRequest(request)
          if (localStorage.getItem('Session')) {
            var username = this.setting.getSetting("username");
            var password = this.setting.getSetting("password");
            var baseURL = this.setting.getSetting("baseURL");
            console.log("Session Timeout");
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'login': 'loginPage'
              })
            };
            this.http.post("".concat(baseURL, "/token"), "grant_type=password&username=".concat(username, "&password=").concat(password), httpOptions).subscribe(function (result) {
              console.log(result); // login successful if there's a jwt token in the response

              if (result && result.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('Session', JSON.stringify(result));
                localStorage.setItem('access_token', JSON.stringify(result.access_token));
                console.log("New Session Granted");
              }
            }, function (err) {
              console.log("New Session Error");
            });
          } else {
            this.router.navigate(['../login']);
          }
        }
      }, {
        key: "setRequest",
        value: function setRequest(request) {
          this.requests = [];
          this.requests[0] = request;
        }
      }, {
        key: "getRequest",
        value: function getRequest() {
          return this.requests[0];
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("acess_token");
          localStorage.removeItem("Session"); // localStorage.removeItem("mySettings");

          this.router.navigate(["../login"], {
            replaceUrl: true
          });
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/service/data.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/data.service.ts ***!
    \*****************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _components_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/map-search/map-search.component */
    "./src/app/components/map-search/map-search.component.ts");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/service/settings.service.ts");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http, settings, loadingController, translate, httpNative, camera, actionSheetCtrl, transfer, // private fileChooser: FileChooser,
      filePath, file, modalController, fcm, router) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.settings = settings;
        this.loadingController = loadingController;
        this.translate = translate;
        this.httpNative = httpNative;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.filePath = filePath;
        this.file = file;
        this.modalController = modalController;
        this.fcm = fcm;
        this.router = router;
        this.FilteredTrips = [];
        this.Trips = [];
        this.waiting = 1;
        this.Locations = [];
        this.Categories = [];
        this.value = [];
        this.fileURI = null;
        this.featured_image = null;
        this.SelectCategory = [];
        this.TripsFromUni = [];
        this.TripsToUni = [];
        this.University = [];
        this.notiflag = false;
        this.trips = 0;
      }

      _createClass(DataService, [{
        key: "getLocations",
        value: function getLocations() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this11 = this;

            var api;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    // this.alertSrv.show();
                    api = "api/list_uni";
                    _context9.next = 3;
                    return this.httpPostMethod(api, {}).then(function (res) {
                      console.log(res);
                      var temp = JSON.parse(res["data"]);
                      var sms = JSON.parse(res.data);
                      _this11.Locations = temp["data"]; // this.alertSrv.hide();
                    }, function (err) {// if (err.status == -3 || err.status == -4) {
                      //   this.alertSrv.presentToast("Some thing wrong please check internet connection", "danger")
                      // } else {
                      // this.alertSrv.presentToast("Something wrong", "danger")
                      // }
                    });

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "httpGetMethod",
        value: function httpGetMethod(apiName) {
          var httpOptions = {
            // headers: new HttpHeaders({
            "Content-Type": "application/json" // })

          };
          console.log(this.settings.getSetting("baseURL") + apiName);
          return this.httpNative.get(this.settings.getSetting("baseURL") + apiName, {}, httpOptions);
        }
      }, {
        key: "httpPostMethod",
        value: function httpPostMethod(api, body) {
          var httpOptions = {
            // headers: new HttpHeaders({
            "Accept": "*/*",
            "Content-Type": "application/json" // })

          };
          console.log(body);
          return this.httpNative.post(this.settings.getSetting("baseURL") + api, body, httpOptions);
        }
      }, {
        key: "GetMap",
        value: function GetMap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var modal;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalController.create({
                      component: _components_map_search_map_search_component__WEBPACK_IMPORTED_MODULE_5__["MapSearchComponent"],
                      componentProps: {
                        'address': "",
                        'latt': null,
                        'long': null
                      }
                    });

                  case 2:
                    modal = _context10.sent;
                    _context10.next = 5;
                    return modal.present();

                  case 5:
                    return _context10.abrupt("return", _context10.sent);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "upload",
        value: function upload(file, fileName, uploadFileName) {
          var options = {
            fileKey: 'file',
            fileName: fileName,
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
          };
          console.log(file);
          console.log(fileName);
          var fileTransfer = this.transfer.create(); //http://pickmeupjo.com/pickmeup/uploadphoto.php

          fileTransfer.upload(file, "http://pickmeupjo.com/pickmeup/" + uploadFileName + ".php", options).then(function (data) {
            console.log(data); // this.translate.get("uploadSuccess").subscribe(value => {

            console.log("Upload Success", fileName); // })
          }, function (err) {
            // this.translate.get("uploadError").subscribe(value => {
            console.log("Upload Error", fileName); // })

            console.log(err);
          });
        }
      }, {
        key: "resrAllImages",
        value: function resrAllImages() {
          this.photo = null;
          this.photo_name = null;
          this.card_id = null;
          this.card_id_name = null;
          this.student_id = null;
          this.student_id_name = null;
          this.driver_licence = null;
          this.driver_licence_name = null;
          this.car_id = null;
          this.car_id_name = null;
        }
      }, {
        key: "getLocationDetails",
        value: function getLocationDetails(id) {
          return this.Locations.filter(function (item) {
            return item.id == id;
          });
        }
      }, {
        key: "resetLocalStorage",
        value: function resetLocalStorage(item) {
          if (item) {
            localStorage.removeItem(item);
          } else {
            localStorage.removeItem("driver_id");
            localStorage.removeItem("active_non");
            localStorage.removeItem("User");
            localStorage.removeItem("User_Old");
          }
        }
      }, {
        key: "pickImage",
        value: function pickImage(sourceType) {
          var _this12 = this;

          var date = new Date().getTime();
          var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            if (_this12.imageID == 1) {
              _this12.photo = "data:image/jpeg;base64," + imageData;
              _this12.photo_name = date + "_IMG.jpg";

              _this12.upload(_this12.photo, _this12.photo_name, "uploadphoto"); // console.log(this.photo)
              // console.log(this.photo_name)

            } else if (_this12.imageID == 2) {
              _this12.card_id = "data:image/jpeg;base64," + imageData;
              _this12.card_id_name = date + "_IMG.jpg";

              _this12.upload(_this12.card_id, _this12.card_id_name, "uploadstudentid"); // console.log(this.card_id)
              // console.log(this.card_id_name)

            } else if (_this12.imageID == 3) {
              _this12.student_id = "data:image/jpeg;base64," + imageData;
              _this12.student_id_name = date + "_IMG.jpg";

              _this12.upload(_this12.student_id, _this12.student_id_name, "uploadcardid");
            } else if (_this12.imageID == 4) {
              _this12.driver_licence = "data:image/jpeg;base64," + imageData;
              _this12.driver_licence_name = date + "_IMG.jpg";

              _this12.upload(_this12.photo, _this12.photo, "uploadcardid"); // console.log(this.driver_licence)
              // console.log(this.driver_licence_name)

            } else if (_this12.imageID == 5) {
              _this12.car_id = "data:image/jpeg;base64," + imageData;
              _this12.car_id_name = date + "_IMG.jpg";
            } else if (_this12.imageID == 100) {
              _this12.payment = "data:image/jpeg;base64," + imageData;
              _this12.payment_name = date + "_IMG.jpg";
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this13 = this;

            var trans, actionSheet;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.imageID = id;
                    this.translate.get("ActionSheet").subscribe(function (result) {
                      trans = result;
                    });
                    _context11.next = 4;
                    return this.actionSheetCtrl.create({
                      header: trans.header,
                      buttons: [{
                        text: trans.photo,
                        icon: 'images',
                        handler: function handler() {
                          _this13.pickImage(_this13.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: trans.camera,
                        icon: 'camera',
                        handler: function handler() {
                          _this13.pickImage(_this13.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: trans.cancel,
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 4:
                    actionSheet = _context11.sent;
                    _context11.next = 7;
                    return actionSheet.present();

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "subscribePush",
        value: function subscribePush() {
          var _this14 = this;

          // if (this.platform.is('cordova')) {
          // pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
          //   if (this.config.notificationType == "fcm") {
          try {
            this.fcm.subscribeToTopic('marketing');
            this.fcm.getToken().then(function (token) {
              //alert("registration" + token);
              _this14.token = token;
              console.log(token); //this.storage.set('registrationId', token);
              // this.registerDevice(token);
            });
            this.fcm.onNotification().subscribe(function (data) {
              console.log("notification1 : ", data); //if (data.wasTapped) {

              if (data.landing_page == 'notification') _this14.router.navigate([data.landing_page]);else {
                _this14.notiflag = true;
                _this14.trips = data.id;

                _this14.router.navigate([data.landing_page], {
                  queryParams: {
                    id: data.id
                  }
                });

                console.log("notification2 : ", data);
              } // } else {
              //    console.log("Received in foreground");
              //  };
            });
            this.fcm.onTokenRefresh().subscribe(function (token) {
              _this14.token = token; // this.storage.set('registrationId', token);
              // this.registerDevice(token);
            });
            return this.token;
          } catch (error) {} //   }
          //   else if (this.config.notificationType == "onesignal") {
          //     this.oneSignal.startInit(this.config.onesignalAppId, this.config.onesignalSenderId);
          //     this.oneSignal.endInit();
          //     this.oneSignal.getIds().then((data) => {
          //     //   this.registerDevice(data.userId);
          //     })
          //   }
          // }

        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
      }, {
        type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])], DataService);
    /***/
  },

  /***/
  "./src/app/service/index.ts":
  /*!**********************************!*\
    !*** ./src/app/service/index.ts ***!
    \**********************************/

  /*! exports provided: AlertService, AuthenticationService, SettingsService, DataService */

  /***/
  function srcAppServiceIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/service/alert.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"];
    });
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/service/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"];
    });
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/service/settings.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"];
    });
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/service/data.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"];
    });
    /***/

  },

  /***/
  "./src/app/service/settings.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/service/settings.service.ts ***!
    \*********************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppServiceSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js"); // import { TranslateService } from 'node_modules~/@ngx-translate/core/public_api';


    var SettingsService = /*#__PURE__*/function () {
      function SettingsService(menuCtrl, domCtrl, translate, loadingController, alertController, toastController) {
        _classCallCheck(this, SettingsService);

        this.menuCtrl = menuCtrl;
        this.domCtrl = domCtrl;
        this.translate = translate;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.colorThemes = [{
          name: 'theme1',
          styles: [{
            themeVariable: '--ion-color-primary',
            value: '#0f3939'
          }, {
            themeVariable: '--ion-item-background-color-active',
            value: '#00695c'
          }, {
            themeVariable: '--settings-title',
            value: '#0f3939'
          }, {
            themeVariable: '--ion-icon-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-menu-icon-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-title-text-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-toolbar-background-color',
            value: '#0f3939'
          }, {
            themeVariable: '--ion-menu-content-color',
            value: '#0f3939'
          }, {
            themeVariable: '--ion-menu-color',
            value: '#0f3939'
          }, {
            themeVariable: '--ion-menu-label-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-menu-title-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-searchbar-color',
            value: '#0f3939'
          }]
        }, // {
        //   name: 'theme2',
        //   styles: [
        //     { themeVariable: '--ion-color-primary', value: '#0f3939' },
        //     { themeVariable: '--ion-item-background-color-active', value: '#00695c' },
        //     { themeVariable: '--settings-title', value: '#0f3939' },
        //     { themeVariable: '--ion-icon-color', value: '#ffffff' },
        //     { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        //     { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        //     { themeVariable: '--ion-toolbar-background-color', value: '#0f3939' },
        //     { themeVariable: '--ion-menu-content-color', value: '#0f3939' },
        //     { themeVariable: '--ion-menu-color', value: '#0f3939' },
        //     { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        //     { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        //     { themeVariable: '--ion-searchbar-color', value: '#0f3939' },
        //     // { themeVariable: '--dx-butn-color', value: '#0f3939' }
        //   ]
        // },
        {
          name: 'gold',
          styles: [{
            themeVariable: '--ion-color-primary',
            value: '#9f7c5e'
          }]
        }, {
          name: 'silver',
          styles: [{
            themeVariable: '--ion-color-primary',
            value: '#919191'
          }]
        }, {
          name: 'theme3',
          styles: [{
            themeVariable: '--ion-color-primary',
            value: '#e7663d'
          }, {
            themeVariable: '--settings-title',
            value: '#e7663d'
          }, {
            themeVariable: '--settings-title',
            value: '#e7663d'
          }, {
            themeVariable: '--ion-icon-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-menu-icon-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-title-text-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-toolbar-background-color',
            value: '#e7663d'
          }, {
            themeVariable: '--ion-menu-content-color',
            value: '#e7663d'
          }, {
            themeVariable: '--ion-menu-color',
            value: '#e7663d'
          }, {
            themeVariable: '--ion-menu-label-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-menu-title-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-searchbar-color',
            value: '#e7663d'
          }]
        }, // {
        //   name: 'theme4',
        //   styles: [
        //     { themeVariable: '--ion-color-primary', value: '#e7663d' },
        //     { themeVariable: '--settings-title', value: '#e7663d' },
        //     { themeVariable: '--ion-item-background-color-active', value: '#f4511e' },
        //     { themeVariable: '--ion-icon-color', value: '#ffffff' },
        //     { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        //     { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        //     { themeVariable: '--ion-toolbar-background-color', value: '#e7663d' },
        //     { themeVariable: '--ion-menu-content-color', value: '#e7663d' },
        //     { themeVariable: '--ion-menu-color', value: '#e7663d' },
        //     { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        //     { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        //     { themeVariable: '--ion-searchbar-color', value: '#e7663d' },
        //     // { themeVariable: '--dx-butn-color', value: '#dd2c00' }
        //   ]
        // },
        {
          name: 'theme5',
          styles: [{
            themeVariable: '--ion-color-primary',
            value: '#673ab7'
          }, {
            themeVariable: '--ion-item-background-color-active',
            value: '#9575cd'
          }, {
            themeVariable: '--settings-title',
            value: '#673ab7'
          }, {
            themeVariable: '--ion-icon-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-menu-icon-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-title-text-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-toolbar-background-color',
            value: '#673ab7'
          }, {
            themeVariable: '--ion-menu-content-color',
            value: '#673ab7'
          }, {
            themeVariable: '--ion-menu-color',
            value: '#673ab7'
          }, {
            themeVariable: '--ion-menu-label-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-menu-title-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-searchbar-color',
            value: '#673ab7'
          }]
        }, {
          name: 'theme6',
          styles: [{
            themeVariable: '--ion-color-primary',
            value: '#1675d2'
          }, {
            themeVariable: '--ion-item-background-color-active',
            value: '#2196f3'
          }, {
            themeVariable: '--settings-title',
            value: '#1675d2'
          }, {
            themeVariable: '--ion-icon-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-menu-icon-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-title-text-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-toolbar-background-color',
            value: '#1675d2'
          }, {
            themeVariable: '--ion-menu-content-color',
            value: '#1675d2'
          }, {
            themeVariable: '--ion-menu-color',
            value: '#1675d2'
          }, {
            themeVariable: '--ion-menu-label-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-menu-title-color',
            value: '#ffffff'
          }, {
            themeVariable: '--ion-searchbar-color',
            value: '#1675d2'
          }]
        } // ,
        // {
        //   name: 'theme7',
        //   styles: [
        //     { themeVariable: '--ion-color-primary', value: '#1675d2' },
        //     { themeVariable: '--ion-item-background-color-active', value: '#2196f3' },
        //     { themeVariable: '--settings-title', value: '#1675d2' },
        //     { themeVariable: '--ion-icon-color', value: '#ffffff' },
        //     { themeVariable: '--ion-menu-icon-color', value: '#ffffff' },
        //     { themeVariable: '--ion-title-text-color', value: '#ffffff' },
        //     { themeVariable: '--ion-toolbar-background-color', value: '#1675d2' },
        //     { themeVariable: '--ion-menu-content-color', value: '#1675d2' },
        //     { themeVariable: '--ion-menu-color', value: '#1675d2' },
        //     { themeVariable: '--ion-menu-label-color', value: '#ffffff' },
        //     { themeVariable: '--ion-menu-title-color', value: '#ffffff' },
        //     { themeVariable: '--ion-searchbar-color', value: '#1675d2' },
        //     // { themeVariable: '--dx-butn-color', value: '#1675d2' }
        //   ]
        // }
        ];
        this._settings = {
          currentLanguage: "1",
          currentTheme: "gold",
          baseURL: "https://www.pickmeupjo.com/pickmeup/",
          firstName: "",
          password: "admin",
          username: "admin",
          Latt: "",
          Long: "",
          Address: "",
          user: "temp"
        };
        this._languages = [{
          id: "0",
          name: "عربى"
        }, {
          id: "1",
          name: "English"
        }];
        this._themes = [{
          id: "theme1",
          name: "Teal"
        } // , { id: "theme2", name: "theme2" }
        , {
          id: "theme3",
          name: "Orange"
        } // , { id: "theme4", name: "theme4" }
        , {
          id: "theme5",
          name: "Purple"
        }, {
          id: "theme6",
          name: "Blue"
        } // , { id: "theme7", name: "theme7" }
        ]; //this.checkdata();

        this.loadSettings();
      }

      _createClass(SettingsService, [{
        key: "presentLoading",
        value: function presentLoading(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var loading;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadingController.create({
                      spinner: 'bubbles',
                      message: message,
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context12.sent;
                    _context12.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message, btn) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var alert;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.alertController.create({
                      header: header,
                      //subHeader: 'Subtitle',
                      message: message,
                      buttons: btn
                    });

                  case 2:
                    alert = _context13.sent;
                    _context13.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var toast;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 2:
                    toast = _context14.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "getAllThemes",
        value: function getAllThemes() {
          return this._themes;
        }
      }, {
        key: "getAllLanguages",
        value: function getAllLanguages() {
          return this._languages;
        }
      }, {
        key: "setSetting",
        value: function setSetting(prop, val) {
          this._settings[prop] = val;
          localStorage.setItem('mySettings', JSON.stringify(this._settings));
        }
      }, {
        key: "getSetting",
        value: function getSetting(prop) {
          return this._settings[prop];
        }
      }, {
        key: "getSettings",
        value: function getSettings() {
          var stngs = {};

          for (var prop in this._settings) {
            stngs[prop] = this._settings[prop];
          }

          return stngs;
        }
      }, {
        key: "doLangChange",
        value: function doLangChange() {
          if (this.lang2 == "en") {
            document.getElementById("proj").setAttribute("dir", "ltr");
            document.getElementById("proj").setAttribute("side", "end");
            this.setTransLang("en");
          } else {
            document.getElementById("proj").setAttribute("dir", "rtl");
            document.getElementById("proj").setAttribute("side", "start"); // console.log(document.querySelectorAll(".input-icon"))

            this.setTransLang("ar");
          }
        }
      }, {
        key: "doThemeChange",
        value: function doThemeChange() {
          var _this15 = this;

          this.getSetting("currentTheme");

          try {
            var colors = this.colorThemes.find(function (colors) {
              return colors.name === _this15.getSetting("currentTheme");
            });
            this.domCtrl.write(function () {
              colors.styles.forEach(function (style) {
                document.documentElement.style.setProperty(style.themeVariable, style.value);
              });
            });
          } catch (error) {
            console.log(error);
          }
        }
      }, {
        key: "setTransLang",
        value: function setTransLang(lang) {
          this.translate.defaultLang = lang;
          this.translate.setDefaultLang(lang);
          this.translate.use(lang);
        }
      }, {
        key: "loadSettings",
        value: function loadSettings() {
          var locals = JSON.parse(localStorage.getItem('mySettings'));
          if (!locals) return;

          for (var prop in this._settings) {
            if (prop in locals) this._settings[prop] = locals[prop];
          } // environment.baseUrl = this._settings["baseURL"];

        }
      }, {
        key: "storeSettings",
        value: function storeSettings(vals, applyChanges) {
          console.log(this._settings);
          var themeChange = false;
          var menuChange = false;
          var languageChange = false;
          if (!vals) return;

          for (var prop in this._settings) {
            if (prop in vals && this._settings[prop] != vals[prop]) {
              if (prop == "currentLanguage") languageChange = true;
              if (prop == "currentTheme") themeChange = true;

              if (prop == "baseURL" && vals["baseURL"].trim() == "") {
                continue;
              } else {//  environment.baseUrl = vals[prop];
              }

              this._settings[prop] = vals[prop];
            }
          }

          console.log(this._settings);
          localStorage.setItem('mySettings', JSON.stringify(this._settings));

          if (themeChange && applyChanges) {
            this.doThemeChange(); //   window.location.reload();
          }

          if (languageChange && applyChanges) this.doLangChange();
        }
      }, {
        key: "reset",
        value: function reset() {}
      }, {
        key: "setDefaults",
        value: function setDefaults() {}
      }, {
        key: "theme",
        get: function get() {
          return this._settings["currentTheme"];
        }
      }, {
        key: "lang2",
        set: function set(val) {
          this._settings["currentLanguage"] = val;
        },
        get: function get() {
          if (this._settings["currentLanguage"] == "1") {
            return "en";
          } else {
            return "ar";
          }
        }
      }]);

      return SettingsService;
    }();

    SettingsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], SettingsService);
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(router, formBuilder, dataSrv, alertSrv, modal, stngs) {
        _classCallCheck(this, SignupPage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.dataSrv = dataSrv;
        this.alertSrv = alertSrv;
        this.modal = modal;
        this.stngs = stngs;
        this.isChecked = false;
        this.fcm = this.dataSrv.subscribePush();
        console.log(this.fcm);
        this.buildDriverForm();
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buildDriverForm",
        value: function buildDriverForm() {
          this.DriverForm = this.formBuilder.group({
            user_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]]
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //console.log(document.querySelectorAll(".input-icon"))
          var elements = document.querySelectorAll(".input-icon");
          if (this.stngs.lang2 == 'ar') for (var i = 0; i < elements.length; i++) {
            elements[i].classList.replace("input-icon", "input-icon-rtl");
          }
        }
      }, {
        key: "Register",
        value: function Register() {
          var _this16 = this;

          if (this.DriverForm.get("gender").value == "" || this.DriverForm.get("gender").value == null || this.DriverForm.get("password").value == "" || this.DriverForm.get("password").value == null || this.DriverForm.get("name").value == "" || this.DriverForm.get("name").value == null || this.DriverForm.get("user_name").value == "" || this.DriverForm.get("user_name").value == null) {
            this.alertSrv.presentToast("Please fill require data", "danger");
            return;
          } else {
            if (this.isChecked == false) {
              this.alertSrv.presentToast("Please accept our terms and conditions", "danger");
              return;
            } else {
              this.alertSrv.show();
              var DriverData = {};
              this.fcm = this.dataSrv.subscribePush();
              console.log(this.fcm);
              DriverData["name"] = this.DriverForm.get("name").value;
              DriverData["user_name"] = this.DriverForm.get("user_name").value;
              DriverData["password"] = this.DriverForm.get("password").value;
              DriverData["location"] = "lat: " + this.dataSrv.lat + " ,long: " + this.dataSrv.long;
              DriverData["email"] = this.DriverForm.get("email").value;
              DriverData["phone"] = this.DriverForm.get("phone").value;
              DriverData["card_id"] = this.dataSrv.card_id_name ? this.dataSrv.card_id_name : null; // image

              DriverData["fcm_tokem"] = this.fcm;
              DriverData["gender"] = this.DriverForm.get("gender").value;
              DriverData["photo"] = this.dataSrv.photo_name ? this.dataSrv.photo_name : null; // image

              DriverData["student_id"] = this.dataSrv.student_id_name ? this.dataSrv.student_id_name : null; // image

              if (this.DriverForm.get("name").value != '' && this.DriverForm.get("user_name").value != '' && this.DriverForm.get("password").value != '' && this.dataSrv.lat != '' && this.dataSrv.long != '' && this.DriverForm.get("email").value != '' && this.DriverForm.get("phone").value != '' && this.dataSrv.card_id_name != null && this.dataSrv.photo_name != null && this.dataSrv.student_id_name != null) {
                DriverData["active_non"] = 1;
                localStorage.setItem("active_non", "1");
              } else {
                DriverData["active_non"] = 0;
                localStorage.setItem("active_non", "0");
              }

              localStorage.setItem("User_Old", JSON.stringify(DriverData));
              console.log("jjjjj", DriverData);
              var api = "api/register_student";
              this.dataSrv.httpPostMethod(api, DriverData).then(function (res) {
                console.log(res);
                var data = JSON.parse(res.data);
                var sms = JSON.parse(res.data);

                if (sms.success == false) {
                  _this16.alertSrv.presentToast(sms.message, "danger");
                } else {
                  _this16.alertSrv.hide();

                  DriverData["driver_id"] = data.data;
                  DriverData["photo"] = _this16.dataSrv.photo_name ? _this16.stngs.getSetting("baseURL") + _this16.dataSrv.photo_name : null; // image

                  DriverData["student_id"] = _this16.dataSrv.student_id_name ? _this16.stngs.getSetting("baseURL") + _this16.dataSrv.student_id_name : null; // image

                  DriverData["card_id"] = _this16.dataSrv.card_id_name ? _this16.stngs.getSetting("baseURL") + _this16.dataSrv.card_id_name : null; // image

                  localStorage.setItem("driver_id", data.data);
                  localStorage.setItem("User", JSON.stringify(DriverData));

                  _this16.alertSrv.presentToast("Registered Successfully", "success");

                  _this16.closeSignUp();
                }
              }, function (err) {
                if (err.status == -3 || err.status == -4) {
                  _this16.alertSrv.presentToast("Some thing wrong please check internet connection", "danger");
                } else {
                  _this16.alertSrv.presentToast("Something wrong", "danger");
                }
              });
            }
          }
        }
      }, {
        key: "closeSignUp",
        value: function closeSignUp() {
          this.dataSrv.resrAllImages();

          if (localStorage.getItem("active_non") == "1") {
            this.dataSrv.waiting = 0;
            this.router.navigate(["../home"], {
              replaceUrl: true
            });
          } else {
            this.dataSrv.waiting = 1;
            this.router.navigate(["../wait"], {
              replaceUrl: true
            });
          }

          this.modal.dismiss();
        }
      }, {
        key: "closeSignUp1",
        value: function closeSignUp1() {
          this.dataSrv.resrAllImages();
          this.dataSrv.waiting = 0;
          this.router.navigate(["../intro"], {
            replaceUrl: true
          });
          this.modal.dismiss();
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
          }
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])], SignupPage);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\My Data\Rar Files\Mubarak_Update\Mubarak\student\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map