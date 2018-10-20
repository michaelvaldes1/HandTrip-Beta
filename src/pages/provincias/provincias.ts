import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BocasPage } from '../bocas/bocas';
import { ChiriquiPage } from '../chiriqui/chiriqui';
import { CoclePage } from '../cocle/cocle';
import { Colon1Page } from '../colon1/colon1';
import { DarienPage } from '../darien/darien';
import { HerreraPage } from '../herrera/herrera';
import { SantosPage } from '../santos/santos';
import { VeraguasPage } from '../veraguas/veraguas';
import { UsuarioProvider } from '../../providers/usuario/usuario';

import { Credenciales } from '../../providers/usuario/usuario';
import { AngularFireAuth } from '@angular/fire/auth';


@IonicPage()
@Component({
  selector: 'page-provincias',
  templateUrl: 'provincias.html',
})
export class ProvinciasPage {

  user: Credenciales = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public usuarioProv: UsuarioProvider,
              private afAuth: AngularFireAuth,
              private toast: ToastController) {

          console.log(this.usuarioProv.usuario);

          this.user = this.usuarioProv.usuario;

          

  }
  ocultar:Boolean;

  goBocas(){
    this.navCtrl.push(BocasPage);
  }

  goChiriqui(){
    this.navCtrl.push(ChiriquiPage);
  }

  goCocle():void{
    this.navCtrl.push(CoclePage);
  }

  goColon(){
    this.navCtrl.push(Colon1Page);
  }

  goDarien(){
    this.navCtrl.push(DarienPage);
  }

  goHerrera(){
    this.navCtrl.push(HerreraPage);
  }

  goSantos(){
    this.navCtrl.push(SantosPage);
  }

  goVeraguas(){
    this.navCtrl.push(VeraguasPage);

  }

  activar(){
    this.ocultar = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvinciasPage');
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.toast.create({
          message: "Bienvenido a HandTrip",
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
          message: 'No se encuentran los detalles de autenticación.',
          duration: 3000
        }).present();
      }
    });
  }

  
}

