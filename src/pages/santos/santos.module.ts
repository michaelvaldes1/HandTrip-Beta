import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SantosPage } from './santos';

@NgModule({
  declarations: [
    SantosPage,
  ],
  imports: [
    IonicPageModule.forChild(SantosPage),
  ],
})
export class SantosPageModule {}
