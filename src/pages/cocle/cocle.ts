import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AguadulcePage } from '../aguadulce/aguadulce';
import { VallePage } from '../valle/valle';
import { SanJuanPage } from '../san-juan/san-juan';
import { AntonPage } from '../anton/anton';
import { PintadaPage } from '../pintada/pintada';
import { GrandePage } from '../grande/grande';
import { CopePage } from '../cope/cope';
import { PenonomePage } from '../penonome/penonome';

@IonicPage()
@Component({
  selector: 'page-cocle',
  templateUrl: 'cocle.html',
})
export class CoclePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goAguadulce(){
    this.navCtrl.push(AguadulcePage);
  }

  goValle(){
    this.navCtrl.push(VallePage);
  }

  goSanJuan(){
    this.navCtrl.push(SanJuanPage);
  }

  goAnton(){
    this.navCtrl.push(AntonPage);
  }

  goPintada(){
    this.navCtrl.push(PintadaPage);
  }

  goGrande(){
    this.navCtrl.push(GrandePage);
  }

  goCope(){
    this.navCtrl.push(CopePage);
  }

  goPenonome(){
    this.navCtrl.push(PenonomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoclePage');
  }

}
