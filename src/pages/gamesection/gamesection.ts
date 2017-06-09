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
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.rootPage = 'Gmtabs';
    this.item = navParams.get('item');
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    console.log("item in gamesection :: " + this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gamesection');    
    this.item;
  }

  // http://pointdeveloper.com/hide-ionic-2-tab-bar-specific-tabs/
  /**
   * Hide tabs on enter page
   */
  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
    //this.rootPage = 'Gmtabs';
  }

/**
 * Return tabs when about to leave page
 */
  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  /**
   * Take me back to previous page
   */
  takeMeBack(){
    this.navCtrl.parent.select(0);
  }

}
