import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationTabsPage } from './donation-tabs';

@NgModule({
  declarations: [
    DonationTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationTabsPage),
  ],
})
export class DonationTabsPageModule {}
