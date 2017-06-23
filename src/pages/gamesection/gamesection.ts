import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { Rest } from '../../providers/rest';

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
  data: any;
  isPicture: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController, public rest: Rest
  ) {
    //this.rootPage = 'Gmtabs';
    this.item = navParams.get('item');
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    console.log("item in gamesection :: " + this.item);
    this.getDate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gamesection');
    this.item;
    this.getWeeklyGame(this.item.id, "24");
  }

  // http://pointdeveloper.com/hide-ionic-2-tab-bar-specific-tabs/
  /**
   * Hide tabs on enter page
   */
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
    //this.rootPage = 'Gmtabs';
  }

  /**
   * Return tabs when about to leave page
   */
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  /**
   * Take me back to previous page
   */
  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({
      ev: myEvent
    });
  }

  getWeeklyGame(categoryId: string, weekNo: string) {
    console.log("inside gameWeekly");
    this.rest.getWeeklyGame(categoryId, weekNo).subscribe(data => {
      this.data = data;
      console.log("this.data :: " + this.data.result);
      var isPics = this.data.result.isPicture;
      if (isPics === 1) {
        this.isPicture = true;
      }
    });
  }

  getDate() {
    var date = new Date();
    console.log("date :: " + date);
    return date;

    
  }

}
