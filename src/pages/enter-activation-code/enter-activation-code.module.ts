import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnterActivationCodePage } from './enter-activation-code';

@NgModule({
  declarations: [
    EnterActivationCodePage,
  ],
  imports: [
    IonicPageModule.forChild(EnterActivationCodePage),
  ],
})
export class EnterActivationCodePageModule {}
