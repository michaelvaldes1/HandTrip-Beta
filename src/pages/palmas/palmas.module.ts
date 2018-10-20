import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PalmasPage } from './palmas';

@NgModule({
  declarations: [
    PalmasPage,
  ],
  imports: [
    IonicPageModule.forChild(PalmasPage),
  ],
})
export class PalmasPageModule {}
