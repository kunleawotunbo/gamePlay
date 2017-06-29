import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { Rest } from '../../providers/rest';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { GameSection } from './gamesection.interface';
import { Response } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

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
  private form: FormGroup;
  public userPhoneNo: AbstractControl;
  public userAnswer: AbstractControl;
  public gameId: AbstractControl;
  private GM: GameSection;
  public alert: boolean;
  public message: string;
  loader: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController, public rest: Rest,
    private formBuilder: FormBuilder, private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
    //this.rootPage = 'Gmtabs';
    this.presentLoading();

    this.item = navParams.get('item');
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    console.log("item in gamesection :: " + this.item);
    this.getDate();
    this.form = this.formBuilder.group({
      userPhoneNo: ['', Validators.required],
      userAnswer: ['', Validators.required],
      gameId: ['',],
    });

    this.userPhoneNo = this.form.controls['userPhoneNo'];
    this.userAnswer = this.form.controls['userAnswer'];
    this.gameId = this.form.controls['gameId'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gamesection');
    this.item;
    this.getWeeklyGame(this.item.id, "26");
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


  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm your answer',
      message: 'Do you want to submit?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Buy clicked');
            this.submitForm();
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Submit form
   */
  submitForm() {
    console.log(this.form.value);

    var result;
    //   var price;
    this.rest.sendAnswer(this.form.value).map((response: Response) => response).subscribe(
      data => {
        result = data;
      },
      error => {
        // On failure/error
        console.log(error);
        var obj = JSON.parse(error._body);
        this.message = obj.message;
        this.alert = true;
      },
      () => {

        // On success
        console.log("Success ")
        this.message = result.message;
        console.log(" this.message :: " + this.message);
        this.alert = true;

      }
    );
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

  getWeeklyGame2(categoryId: string, weekNo: string) {

    console.log("inside gameWeekly");
    this.rest.getWeeklyGame(categoryId, weekNo).subscribe(data => {
      this.data = data;
      console.log("this.data :: " + this.data.result);
      console.log("this.data.result.isPicture up:: " + this.data.result.isPicture);
      var isPics = this.data.result.isPicture;
      console.log("isPics:: " + isPics);

      if (isPics == 1) {
        this.isPicture = true;
      } else {
        this.isPicture = false;
      }
      console.log("this.isPicture :: " + this.isPicture);
      this.loader.dismiss();
    });
  }


  getWeeklyGame(categoryId: string, weekNo: string) {
    console.log("inside gameWeekly");
    this.rest.getWeeklyGame(categoryId, weekNo).subscribe(
      data => {
        this.data = data;
      },
      error => {
        console.log(error);
        this.loader.dismiss();
      },
      () => {
        console.log("this.data :: " + this.data.result);
        console.log("this.data.result.isPicture up:: " + this.data.result.isPicture);
        var isPics = this.data.result.isPicture;
        console.log("isPics:: " + isPics);

        if (isPics == 1) {
          this.isPicture = true;
        } else {
          this.isPicture = false;
        }
        console.log("this.isPicture :: " + this.isPicture);
        this.loader.dismiss();
      });

  }

  getDate() {
    var date = new Date();
    console.log("date :: " + date);
    return date;
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });

    this.loader.present();
  }

}
