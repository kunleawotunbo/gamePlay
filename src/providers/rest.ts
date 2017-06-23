import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the Rest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rest {

  private apiUrlRestcountries = 'https://restcountries.eu/rest/v2/all';
  private apiUrl = 'https://gameplay-olakunle.herokuapp.com/api/';
  //private apiUrl = 'http://10.0.2.2:8084/GamePlay/api/';
  constructor(public http: Http) {
    console.log('Hello Rest Provider');
  }

  getCountries(): Observable<string[]> {
    return this.http.get(this.apiUrlRestcountries)
      .map(this.extractData)
      .catch(this.handleError);
  }

/**
 * Get game category list
 */
  getGameList() {

    var api = this.apiUrl + 'game/listgames';
    return this.http.get(api)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Get weekly game by category and weekNo
   */
   getWeeklyGame(categoryId: string, weekNo: string ) {
     console.log("inside service gameWeekly")
    var api = this.apiUrl + `weeklygames/getWeekGameByWeekNoAndCat/${categoryId}/${weekNo}`;
    return this.http.get(api)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
