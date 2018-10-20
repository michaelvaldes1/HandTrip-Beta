import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoclePage } from './cocle';

@NgModule({
  declarations: [
    CoclePage,
  ],
  imports: [
    IonicPageModule.forChild(CoclePage),
  ],
})
export class CoclePageModule {}
