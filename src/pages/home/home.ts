import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  countries: string[];
  errorMessage: string;
  //const
  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }
  //onLoad
  ionViewDidLoad() {
    this.getCountries();

  }
  //get countries
  getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);

  }
}
