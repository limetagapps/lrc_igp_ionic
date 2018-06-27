import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeInfoPage } from './home-info';

@NgModule({
  declarations: [
    HomeInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeInfoPage),
  ],
})
export class HomeInfoPageModule {}
