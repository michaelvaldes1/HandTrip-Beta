import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChanguinolaPage } from '../changuinola/changuinola';

@IonicPage()
@Component({
  selector: 'page-bocas',
  templateUrl: 'bocas.html',
})
export class BocasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goChanguinola(){
    this.navCtrl.push(ChanguinolaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BocasPage');
  }

}
