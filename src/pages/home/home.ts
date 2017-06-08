import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Rest } from '../../providers/rest';
import { GameSectionPage } from '../gamesection/gamesection';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;
  item: any;

  constructor(public navCtrl: NavController, public rest: Rest) {

  }

  ionViewDidLoad(){
    this.getCountries();
    this.gameCategories;
  }

  getCountries(){
    this.rest.getCountries()
        .subscribe(
          countries => this.countries = countries,
          error => this.errorMessage = <any>error
        );
  }

  viewItem(item){    
    //console.log("item :: " + item);
    this.navCtrl.push(GameSectionPage,{
      item:item
    });
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
