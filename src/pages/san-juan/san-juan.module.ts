import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SanJuanPage } from './san-juan';

@NgModule({
  declarations: [
    SanJuanPage,
  ],
  imports: [
    IonicPageModule.forChild(SanJuanPage),
  ],
})
export class SanJuanPageModule {}
