import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColonPage } from '../colon/colon';

/**
 * Generated class for the Colon1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colon1',
  templateUrl: 'colon1.html',
})
export class Colon1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goColon(){
    this.navCtrl.push(ColonPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Colon1Page');
  }

}
