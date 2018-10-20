import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesePage } from './pese';

@NgModule({
  declarations: [
    PesePage,
  ],
  imports: [
    IonicPageModule.forChild(PesePage),
  ],
})
export class PesePageModule {}
