import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { Rest } from '../providers/rest';
import { GameSectionPage } from '../pages/gamesection/gamesection';
import { PopoverPage } from '../pages/popover/popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';
import { AdmobFreeProvider } from '../providers/admob-free-provider';
import { AdMob } from '@ionic-native/admob';
import {Advert} from '../providers/advert';


@NgModule({
  declarations: [
    MyApp,
   // GameSectionPage,
  //  PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //GameSectionPage,
    //PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    /*
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    */
    Rest,
    AdMobFree,
    AdmobFreeProvider,
    AdMob,
    Advert
  ]
})
export class AppModule {}
