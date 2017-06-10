import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Popover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    console.log("Inside popver");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Popover');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  searchPreviousGames(){
    // https://x-team.com/blog/beginners-guide-ionic-2-mobile-applications/
   
   console.log("Search Previous games clicked");
   /*
    let alert = Alert.create({
            title: "Add Product",
            message: "Enter a product and the price of that product",
            inputs: [
                {
                    name: "product",
                    placeholder: "Product Name"
                },
                {
                    name: "price",
                    placeholder: "Product Price"
                }
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Save",
                    handler: data => {
                        this.productList.push({
                            name: data.product,
                            price: data.price
                        });
                    }
                }
            ]
        });
      this.navCtrl.present(alert);
     */
  }

  

}
