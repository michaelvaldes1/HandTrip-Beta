import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { LoginPageModule } from '../pages/login/login.module';
import { ProvinciasPageModule } from "../pages/provincias/provincias.module";
import { BocasPageModule } from '../pages/bocas/bocas.module';
import { ChiriquiPageModule } from '../pages/chiriqui/chiriqui.module';
import { CoclePageModule } from '../pages/cocle/cocle.module';
import { Colon1PageModule } from '../pages/colon1/colon1.module';
import { DarienPageModule } from '../pages/darien/darien.module';
import { HerreraPageModule } from '../pages/herrera/herrera.module';
import { SantosPageModule } from '../pages/santos/santos.module';
import { VeraguasPageModule } from '../pages/veraguas/veraguas.module';

//Plugins
import { Facebook } from '@ionic-native/facebook';


//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ChanguinolaPageModule } from '../pages/changuinola/changuinola.module';
import { BugabaPageModule } from '../pages/bugaba/bugaba.module';
import { DavidPageModule } from '../pages/david/david.module';
import { ChiriquiFronteraPageModule } from '../pages/chiriqui-frontera/chiriqui-frontera.module';
import { AguadulcePageModule } from '../pages/aguadulce/aguadulce.module';
import { VallePageModule } from '../pages/valle/valle.module';
import { SanJuanPageModule } from '../pages/san-juan/san-juan.module';
import { AntonPageModule } from '../pages/anton/anton.module';
import { PintadaPageModule } from '../pages/pintada/pintada.module';
import { GrandePageModule } from '../pages/grande/grande.module';
import { CopePageModule } from '../pages/cope/cope.module';
import { PenonomePageModule } from '../pages/penonome/penonome.module';
import { ColonPageModule } from '../pages/colon/colon.module';
import { AguaFriaPageModule } from '../pages/agua-fria/agua-fria.module';
import { RutaDarienPageModule } from '../pages/ruta-darien/ruta-darien.module';
import { OcuPageModule } from '../pages/ocu/ocu.module';
import { PesePageModule } from '../pages/pese/pese.module';
import { ChitrePageModule } from '../pages/chitre/chitre.module';
import { PozosPageModule } from '../pages/pozos/pozos.module';
import { MacaracasPageModule } from '../pages/macaracas/macaracas.module';
import { TonosiPageModule } from '../pages/tonosi/tonosi.module';
import { TablasPageModule } from '../pages/tablas/tablas.module';
import { CalobrePageModule } from '../pages/calobre/calobre.module';
import { PuertoVidalPageModule } from '../pages/puerto-vidal/puerto-vidal.module';
import { SonaPageModule } from '../pages/sona/sona.module';
import { CanazasPageModule } from '../pages/canazas/canazas.module';
import { RioPageModule } from '../pages/rio/rio.module';
import { PalmasPageModule } from '../pages/palmas/palmas.module';
import { SantiagoPageModule } from '../pages/santiago/santiago.module';
import { RegisterPageModule } from '../pages/register/register.module';


export const firebaseConfig = {
  apiKey: "AIzaSyCJ7kLb-cijF9GogTsMn-rd6cTkGwndiCg",
    authDomain: "loginapp2-9311e.firebaseapp.com",
    databaseURL: "https://loginapp2-9311e.firebaseio.com",
    projectId: "loginapp2-9311e",
    storageBucket: "",
    messagingSenderId: "1044661101990"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ProvinciasPageModule,
    BocasPageModule,
    ChiriquiPageModule,
    CoclePageModule,
    Colon1PageModule,
    DarienPageModule,
    HerreraPageModule,
    SantosPageModule,
    VeraguasPageModule,
    ChanguinolaPageModule,
    BugabaPageModule,
    DavidPageModule,
    ChiriquiFronteraPageModule,
    AguadulcePageModule,
    VallePageModule,
    SanJuanPageModule,
    AntonPageModule,
    PintadaPageModule,
    GrandePageModule,
    CopePageModule,
    PenonomePageModule,
    ColonPageModule,
    AguaFriaPageModule,
    RutaDarienPageModule,
    OcuPageModule,
    PesePageModule,
    ChitrePageModule,
    PozosPageModule,
    MacaracasPageModule,
    TonosiPageModule,
    TablasPageModule,
    CalobrePageModule,
    PuertoVidalPageModule,
    SonaPageModule,
    CanazasPageModule,
    RioPageModule,
    PalmasPageModule,
    SantiagoPageModule,
    RegisterPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    Facebook
  ]
})
export class AppModule {}
