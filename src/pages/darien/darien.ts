import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AguaFriaPage } from '../agua-fria/agua-fria';
import { RutaDarienPage } from '../ruta-darien/ruta-darien';

/**
 * Generated class for the DarienPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-darien',
  templateUrl: 'darien.html',
})
export class DarienPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goAguaFria(){
    this.navCtrl.push(AguaFriaPage);
  }

  goRutaDarien(){
    this.navCtrl.push(RutaDarienPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DarienPage');
  }

}
