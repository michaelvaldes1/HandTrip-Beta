import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CopePage } from './cope';

@NgModule({
  declarations: [
    CopePage,
  ],
  imports: [
    IonicPageModule.forChild(CopePage),
  ],
})
export class CopePageModule {}
