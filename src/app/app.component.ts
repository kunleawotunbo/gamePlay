import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob, AdMobOptions } from '@ionic-native/admob';
import { AdMobFree } from '@ionic-native/admob-free';
import {Advert} from '../providers/advert';
//import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'TabsPage';
  //rootPage:any = 'Gmtabs';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admob: AdMob,
  private advert: Advert) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.styleDefault();
      splashScreen.hide();

      
      let options: AdMobOptions = {
       // adId: 'ca-app-pub-5732334124058455/7973166445',
          adId: 'ca-app-pub-3940256099942544/6300978111',
        adSize: 'SMART_BANNER',
        isTesting: true,
        autoShow:true
        //position: admob.AD_POSITION.TOP_CENTER
      };

      admob.createBanner(options).then(() => {
        //admob.showBanner(8);
        admob.showBanner(admob.AD_POSITION.TOP_CENTER);
        console.log.apply("I am here createBanner");
      });
      

       //Example implementation
     // this.advert.showBanner();
     // setTimeout(this.advert.showInterstitial(), 10000);


    });
  }

  onAdFailLoad(){
    console.log("Ad failed to load");
  }

  onAdLoaded(){
    console.log("Ad loaded successfully");
  }

  onAdPresent(){
    console.log("Ad showed on screen");
  }
}
