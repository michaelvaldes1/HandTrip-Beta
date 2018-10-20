import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvinciasPage } from '../provincias/provincias';
import { User } from '../../modals/user';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { UsuarioProvider, Credenciales } from '../../providers/usuario/usuario';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { RegisterPage } from '../register/register';
import { async } from 'rxjs/internal/scheduler/async';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;


  constructor(public navCtrl: NavController, 
              private afAuth: AngularFireAuth,
              public usuarioProv: UsuarioProvider,
              private fb: Facebook,
              private platform: Platform) {
  }

  async login(user: User){
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.passworD);
     /* console.log(result);*/
       if(result) {
       this.navCtrl.setRoot('ProvinciasPage');
        }
    }
    catch (e){
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push(RegisterPage)
  }

  goProvincias(){
    this.navCtrl.push(ProvinciasPage);
  }

  signInWithFacebook() {

    if (this.platform.is('cordova')) {
      //celular
      this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
            .then( user =>{

              console.log(user);

        this.usuarioProv.cargarUsuario(
          user.displayName,
          user.email,
          user.photoURL,
          user.uid,
          "facebook"
        );

        this.navCtrl.setRoot("ProvinciasPage");

            }).catch(e => console.log('Error con el login' + JSON.stringify(e)));
      })
    }else{
      //escritorio
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);
        let user = res.user;

        this.usuarioProv.cargarUsuario(
          user.displayName,
          user.email,
          user.photoURL,
          user.uid,
          "facebook"
        );

        this.navCtrl.setRoot("ProvinciasPage");
        

      });

    }

    

  }

}
