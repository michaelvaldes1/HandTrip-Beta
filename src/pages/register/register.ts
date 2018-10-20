import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../modals/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afAut: AngularFireAuth) {
  }

  async register(user: User){
    try {
    const result = await this.afAut.auth.createUserWithEmailAndPassword(user.email, user.passworD);
    console.log(result);
    }
    catch (e){
      console.error(e);
    }
  }

  goLogin(){
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
