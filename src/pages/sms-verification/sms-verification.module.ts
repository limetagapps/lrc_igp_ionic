import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsVerificationPage } from './sms-verification';

@NgModule({
  declarations: [
    SmsVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsVerificationPage),
  ],
})
export class SmsVerificationPageModule {}
