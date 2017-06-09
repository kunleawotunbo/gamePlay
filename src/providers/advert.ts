import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform,  } from 'ionic-angular';
import { AdMob, AdMobOptions } from '@ionic-native/admob';
import 'rxjs/add/operator/map';

/*
  Generated class for the Advert provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Advert {
  // https://learnionic2.com/2017/03/20/insert-admob-ionic-2-application/

  //AdMob IDs from the AdMob console
  private adMobId: { banner: string, interstitial: string };
  private adOptions: AdMobOptions = <AdMobOptions>{};

  //private adExtras: AdMobAdExtras = <AdMobAdExtras>{};

  constructor(private platform: Platform, private admob: AdMob) {
    this.platform.ready().then(() => {
      this.initAds();
    });
  }

  private initAds():void {
    if (!AdMob) {
      console.log("AdMob not found.");
      return;
    }
    this.setAdMobIds();
    this.setAdMobOptions();
    this.registerAdMobEvents();
    this.showBanner();
  }

  private registerAdMobEvents():void {
    document.addEventListener('onAdFailLoad', data => console.log(JSON.stringify(data)));
    document.addEventListener('onAdLoaded', data => console.log(JSON.stringify(data)));
    document.addEventListener('onAdPresent', data => console.log(JSON.stringify(data)));
    document.addEventListener('onAdDismiss', data => console.log(JSON.stringify(data)));
    document.addEventListener('onAdLeaveApp', data => console.log(JSON.stringify(data)));
  }

  private setAdMobIds():void {
    /* 
      Replace IDs with supplied ones via AdMob.
      Different one per platform allows for better analytics
    */
    if (this.platform.is('android')) {
      console.log("Platform is android");
      this.adMobId = {
        banner: "ca-app-pub-234234234234324/234234234234",
        interstitial: "ca-app-pub-3940256099942544/1033173712"
      }
    }
    else if (this.platform.is('ios')) {
      this.adMobId = {
        banner: "ca-app-pub-3940256099942544/6300978111",
        interstitial: "ca-app-pub-3940256099942544/1033173712"
      }
    }
  }

  private setAdMobOptions():void {
    this.adOptions = {
      position: this.admob.AD_POSITION.CENTER,
      isTesting: true,
      autoShow: true
      //adExtras: this.adExtras
    }

    this.admob.setOptions(this.adOptions)
  }

  public showInterstitial():boolean {
    if (!this.admob) return false;
    this.admob.prepareInterstitial({ adId: this.adMobId.interstitial });
    return true;
  }

  public showBanner():boolean {
    if (!this.admob) return false;
    console.log("Inside showBanner");
    this.admob.createBanner({ adId: this.adMobId.banner });
    return true;
  }

  public removeAds():void {
    if (this.admob) this.admob.removeBanner();
  }


}
