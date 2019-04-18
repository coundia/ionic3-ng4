import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  //var
  private apiUrl = 'https://restcountries.eu/rest/v2/all';
// getter
getCountries(): Observable<string[]> {
  return this.http.get(this.apiUrl)
                 .map(this.extractData)

                  .catch(this.handleError);
}
//get json
private extractData(res: Response) {
  let body = res.json();
  //console.log(body);
  return body || { };
}
//on error
private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
/*   constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  } */
  constructor(public http: Http) {}

}
