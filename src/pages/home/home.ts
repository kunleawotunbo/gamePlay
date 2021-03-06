import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Rest } from '../../providers/rest';
import { GameSectionPage } from '../gamesection/gamesection';
import { AdmobFreeProvider } from '../../providers/admob-free-provider';
import { AdMob, AdMobOptions } from '@ionic-native/admob';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;
  item: any;
  public bannerSize: any;
  public bannerSizeOpts = {};
  public bannerAtTop: boolean = false;
  public bannerOverlap: boolean = true;
  public adAutoShow: boolean = false;
  public keys;
  public gameList = [];
  gameReady: boolean = false;
  loader: any;

  constructor(public navCtrl: NavController, public rest: Rest,
    private platform: Platform, private admobFree: AdmobFreeProvider,
    private admob: AdMob, public toastCtrl: ToastController,
     public loadingCtrl: LoadingController
  ) {

    this.presentLoading();

    //console.log(this.admobFree.bannerSizes[0]['android']);
    this.platform.ready().then(() => {
      /*
      if(this.platform.is('android')) {
        this.bannerSizeOpts = this.admobFree.bannerSizes[0]['android'];
      } else if(this.platform.is('android')) {
        this.bannerSizeOpts = this.admobFree.bannerSizes[1]['ios'];
      }
      this.keys = Object.keys(this.bannerSizeOpts);
      */
      /*
      let options: AdMobOptions = {
       // adId: 'ca-app-pub-5732334124058455/7973166445',
          adId: 'ca-app-pub-3940256099942544/6300978111',
        adSize: 'SMART_BANNER',
        isTesting: true,        
      };

      admob.createBanner(options).then(() => {
        //admob.showBanner(8);
        admob.showBanner(admob.AD_POSITION.TOP_CENTER);
        console.log.apply("I am here createBanner");
      });
      */
    });

  }

  ionViewDidLoad() {
   // this.getCountries();
    this.gameCategories;
    this.getGameList();
  }

  getCountries() {
    this.rest.getCountries()
      .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error
      );
  }

  getGameList() {
    var addList; 
    console.log(" Calling game service");
    var data = this.rest.getGameList().map((response: Response) => response).subscribe(
      data => {
        addList = data;
      },
      error => {
        console.log(error);
        this.loader.dismiss();
      },
      () => {
        this.gameList = addList;
        this.gameReady = true;
        this.loader.dismiss();
      });

  }


  viewItem(item) {
    //console.log("item :: " + item);
    // this.navCtrl.pop()
    this.navCtrl.push('GameSectionPage', {
      item: item
    });
  }

   presentToast() {
    let toast = this.toastCtrl.create({
      message: 'No Internet Connection',
      duration: 3000
    });
    toast.present();
  }

    presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });

    this.loader.present();
  }


  prepareBanner() {
    this.admobFree.bannerConfig = {
      size: this.bannerSize,
      bannerAtTop: this.bannerAtTop,
      // overlap: this.bannerOverlap, // Not sure if deprecated, it bugs out if set to 'false' then back to 'true'. Waiting confirmation from developer.
      autoShow: this.adAutoShow
    };
    this.admobFree.prepareBanner();
    console.log('prepareBanner() called.');
  }

  showBanner() {
    this.admobFree.bannerConfig = {
      size: this.bannerSize,
      bannerAtTop: this.bannerAtTop,
      // overlap: this.bannerOverlap, // Not sure if deprecated, it bugs out if set to 'false' then back to 'true'. Waiting confirmation from developer.
      autoShow: this.adAutoShow
    };
    this.admobFree.showBanner();
    console.log('showBanner() called.');
  }

  hideBanner() {
    this.admobFree.hideBanner();
    console.log('hideBanner() called.');
  }

  removeBanner() {
    this.admobFree.removeBanner();
    console.log('removeBanner() called.');
  }

  prepareInterstitial() {
    this.admobFree.interstitialConfig = {
      autoShow: this.adAutoShow
    }
    this.admobFree.prepareInterstitial();
    console.log('prepareInterstitial() called.');
  }

  showInterstitial() {
    this.admobFree.interstitialConfig = {
      autoShow: this.adAutoShow
    }
    this.admobFree.showInterstitial();
    console.log('showInterstitial() called.');
  }

  gameCategories = [
    {
      id: 1,
      gameName: "Spot the difference",
      gameCode: "STD"
    },
    {
      id: 2,
      gameName: "Hidden Words",
      gameCode: "HD"
    },
    {
      id: 3,
      gameName: "Locks Games",
      gameCode: "LD"
    },
    {
      id: 4,
      gameName: "Puzzles & Quizzes",
      gameCode: "PQ"
    },
    {
      id: 5,
      gameName: "Criminal Cases Pictures",
      gameCode: "CCP"
    },
    {
      id: 6,
      gameName: "Facial Recognition Games",
      gameCode: "FRG"
    }

  ];

}
