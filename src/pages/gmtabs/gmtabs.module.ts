import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gmtabs } from './gmtabs';

@NgModule({
  declarations: [
    Gmtabs,
  ],
  imports: [
    IonicPageModule.forChild(Gmtabs),
  ],
  exports: [
    Gmtabs
  ]
})
export class GmtabsModule {}
