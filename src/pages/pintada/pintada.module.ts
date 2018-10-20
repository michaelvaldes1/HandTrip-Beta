import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PintadaPage } from './pintada';

@NgModule({
  declarations: [
    PintadaPage,
  ],
  imports: [
    IonicPageModule.forChild(PintadaPage),
  ],
})
export class PintadaPageModule {}
