import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalobrePage } from './calobre';

@NgModule({
  declarations: [
    CalobrePage,
  ],
  imports: [
    IonicPageModule.forChild(CalobrePage),
  ],
})
export class CalobrePageModule {}
