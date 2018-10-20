import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OcuPage } from '../ocu/ocu';
import { PesePage } from '../pese/pese';
import { ChitrePage } from '../chitre/chitre';
import { PozosPage } from '../pozos/pozos';

/**
 * Generated class for the HerreraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-herrera',
  templateUrl: 'herrera.html',
})
export class HerreraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goOcu(){
    this.navCtrl.push(OcuPage);
  }

  goPese(){
    this.navCtrl.push(PesePage);
  }

  goChitre(){
    this.navCtrl.push(ChitrePage);
  }

  goPozos(){
    this.navCtrl.push(PozosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HerreraPage');
  }

}
