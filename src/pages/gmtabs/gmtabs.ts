import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Gmtabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gmtabs',
  templateUrl: 'gmtabs.html',
})
export class Gmtabs {
   tab4Root = 'BACK';
  tab5Root = 'MENU';
  //tab3Root = 'ContactPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gmtabs');
  }

}
