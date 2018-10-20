import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChitrePage } from './chitre';

@NgModule({
  declarations: [
    ChitrePage,
  ],
  imports: [
    IonicPageModule.forChild(ChitrePage),
  ],
})
export class ChitrePageModule {}
