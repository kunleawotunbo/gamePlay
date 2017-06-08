import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Gamesection page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gamesection',
  templateUrl: 'gamesection.html',
})
export class GameSectionPage {

  title: string;
  item: any;
  public rootPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = 'gmtabs';
    this.item = navParams.get('item');
    console.log("item in gamesection :: " + this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gamesection');    
    this.item;
  }

}
