import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitDonationPage } from './submit-donation';

@NgModule({
  declarations: [
    SubmitDonationPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitDonationPage),
  ],
})
export class SubmitDonationPageModule {}
