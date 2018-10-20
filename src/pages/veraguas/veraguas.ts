import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalobrePage } from '../calobre/calobre';
import { PuertoVidalPage } from '../puerto-vidal/puerto-vidal';
import { SonaPage } from '../sona/sona';
import { CanazasPage } from '../canazas/canazas';
import { RioPage } from '../rio/rio';
import { PalmasPage } from '../palmas/palmas';
import { SantiagoPage } from '../santiago/santiago';

/**
 * Generated class for the VeraguasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veraguas',
  templateUrl: 'veraguas.html',
})
export class VeraguasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goCalobre(){
    this.navCtrl.push(CalobrePage);
  }

  goPuertoVidal(){
    this.navCtrl.push(PuertoVidalPage);
  }

  goSona(){
    this.navCtrl.push(SonaPage);
  }

  goCanazas(){
    this.navCtrl.push(CanazasPage);
  }

  goRio(){
    this.navCtrl.push(RioPage);
  }

  goPalmas(){
    this.navCtrl.push(PalmasPage);
  }

  goSantiago(){
    this.navCtrl.push(SantiagoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VeraguasPage');
  }

}
