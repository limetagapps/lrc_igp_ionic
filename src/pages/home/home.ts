

import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { YOUTUBE_VIDEOS } from '../../mocks/youtube-content';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Video } from "../../models/videos";


import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { ReadMorePage } from '../read-more/read-more';
import {Observable} from "rxjs/Observable";

import { WordpressService } from '../../services/wordpress.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public main: boolean = true;
  public plane: boolean = true;
  public information: boolean = true;
  public main2: boolean = true;
  public plane2: boolean = true;
  public information2: boolean = true;
  public myshadow: boolean = true;

  sliderImg1: string;
  sliderImg2: string;

  ytVideos = YOUTUBE_VIDEOS;

  slidersData: Array<any>;
  pdata;
  posts: Array<any>;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController, public videoPlayer: YoutubeVideoPlayer, public wordpressService: WordpressService) {
    this.menuCtrl.enable(true,"myMenu");
    this.slidersData = [
    ];

  }

  ionViewWillEnter(){
    console.log("entering");
    Observable.forkJoin(
      this.wordpressService.getAllPosts())
      .subscribe(data => {
        this.posts = data[0];
        this.posts.forEach( p => {
          this.pdata = {
            bgImage : 'url('+p.mobiconnector_feature_image.source_url+')',
            subBGImage : '',
            tagInfo : p.title.rendered,
            information : false,
            main : true,
            description1: p.content.rendered,
            description2: p.content.rendered,
            videoId: ''
          };
          this.slidersData.push(this.pdata);
        });
      });
  }


  infoBtn(num){
    let slider = this.slidersData[num];
    slider.information = true;
    slider.main = false;
    slider.subBGImage = slider.bgImage;
    this.myshadow = false;
    // slider.bgImage = 'white';
  }

  informationCloseBtn(num){
    let slider = this.slidersData[num];
    slider.information = false;
    slider.main = true;
      this.myshadow = true;
    // slider.bgImage = slider.subBGImage;
  }

  playVideo(video: Video){
    this.videoPlayer.openVideo(video.videoId);
    console.log('YT');
  }

  readMore(slide){
    this.navCtrl.push(ReadMorePage,{ slide });
  }

  shareBtn(slide){
    console.log('OBJECT: ', slide);
  }


  ionViewDidLoad(){

    console.log(this.slidersData);
  }

}
