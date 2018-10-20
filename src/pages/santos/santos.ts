import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MacaracasPage } from '../macaracas/macaracas';
import { TonosiPage } from '../tonosi/tonosi';
import { TablasPage } from '../tablas/tablas';

/**
 * Generated class for the SantosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-santos',
  templateUrl: 'santos.html',
})
export class SantosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goMacaracas(){
    this.navCtrl.push(MacaracasPage);
  }

  goTonosi(){
    this.navCtrl.push(TonosiPage);
  }

  goTablas(){
    this.navCtrl.push(TablasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SantosPage');
  }

}
