import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DavidPage } from '../david/david';
import { BugabaPage } from '../bugaba/bugaba';
import { ChiriquiFronteraPage } from '../chiriqui-frontera/chiriqui-frontera';


@IonicPage()
@Component({
  selector: 'page-chiriqui',
  templateUrl: 'chiriqui.html',
})
export class ChiriquiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goDavid(){
    this.navCtrl.push(DavidPage);
  }

  goBugaba(){
    this.navCtrl.push(BugabaPage)
  }
  goChiriquiFrontera(){
    this.navCtrl.push(ChiriquiFronteraPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChiriquiPage');
  }

}
