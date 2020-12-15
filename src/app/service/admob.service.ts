import { Injectable } from '@angular/core';
//IMPORT PLATFORM SO WE CAN START ADMOB AS SOON AS IT'S READY.
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AdmobService {
    // //BANNER CONFIG
    // bannerConfig: AdMobFreeBannerConfig = {
    //     size: 'LARGE_BANNER',
    //     autoShow: true,
    //    // id: "ca-app-pub-3940256099942544/6300978111"
    //     id: "ca-app-pub-6505060464041221/5457187768"
    // };
    // //INTERSTITIAL CONFIG
    // interstitialConfig: AdMobFreeInterstitialConfig = {
    //     autoShow: false,
    //    // id: "ca-app-pub-3940256099942544/1033173712"
    //     id: "ca-app-pub-6505060464041221/4295331095"
    // };

    // constructor(
    //     public platform: Platform,
    //     private admobFree: AdMobFree
    // ) {
    //     //LOAD ADS AT PLATFORM READY PROMISE.
    //     platform.ready().then(() => {
    //         //BANNER
    //         this.admobFree.banner.config(this.bannerConfig);
    //         //INTERSTITIAL
    //         this.admobFree.interstitial.config(this.interstitialConfig);
    //         this.admobFree.interstitial.prepare().then(() => {
    //             console.log('INTERSTIAL LOADED')
    //         }).catch(e =>
    //             console.log('PROBLEM LOADING INTERSTITIAL: ', e)
    //         );
    //     });
    // }
    // ShowBanner() {
    //     //CHECK AND SHOW BANNER
    //     this.admobFree.banner.prepare().then(() => {
    //         console.log('BANNER LOADED')
    //     }).catch(e =>
    //         console.log('PROBLEM LOADING BANNER: ', e)
    //     );
    // }
    // ShowInterstitial() {
    //     //CHECK AND SHOW INTERSTITIAL
    //     this.admobFree.interstitial.isReady().then(() => {
    //         //AT .ISREADY SHOW 
    //         this.admobFree.interstitial.show().then(() => {
    //             console.log('INTERSTITIAL LOADED')
    //         })
    //             .catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e));
    //     })
    //         .catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e));
    // }

    // hideBanner() {
    //     this.admobFree.banner.hide();
    // }
}