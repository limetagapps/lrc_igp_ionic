

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

  sliderImg1: string;
  sliderImg2: string;

  ytVideos = YOUTUBE_VIDEOS;

  slidersData: Array<any>;
  pdata;
  posts: Array<any>;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController, public videoPlayer: YoutubeVideoPlayer, public wordpressService: WordpressService) {
    this.menuCtrl.enable(true,"myMenu");
    this.slidersData = [
      /*{
        bgImage : `url(assets/imgs/home-slider-1.png)`,
        subBGImage : ``,
        tagInfo : `#SUPPORT AN AMBULANCE TEAM`,
        information : false,
        main : true,
        description1: `Red Cross works with other national societies to assist clients in locating family members. Requests are accepted at all Red Cross offices, on U.S. military bases worldwide and at local chapters. Depending on circumstances, searches may continue for months or years. News from Red Cross on the fate of a loved one can bring closure for grieving relatives or, occasionally, a joyous reunion.`,
        description2: `Nazi Holocaust survivors searching for information on family members who were victims of the Third Reich can get help from Red Cross. Local requests are forwarded to the Red Cross Holocaust and War Victim Tracing and Information Center in Baltimore, Maryland. The Center provides tracing, information and referral services related to civilian victims of World War II who lived in Europe or the USSR between 1933 and 1952.`,
        author : `Support An Ambulance Team`,
        authorIcon : `https://i.ytimg.com/vi/257lhkkhakA/hqdefault.jpg`,
        videoThumbnail : `assets/imgs/sample-banner-1.jpg`,
        title : `Why do we need your support with Ambulance Fuel`,
        descriptionVideo : `Learn Kotlin Fast → http://bit.ly/2xBXFFo\nWeb Notifications API in FCM → http://bit.ly/2xuT6gd\nML specialization on Coursera → http://bit.ly/2J4m1cd\nCloud ML Engine → http://bit.ly/2J2Vmg4\nGoogle Kubernetes Engine 1.10 → http://bit.ly/2J506Sq\nChrome 64 Beta → http://bit.ly/2xuIONc\n\n\nThis week’s TL;DR #DevShow is led by Google Developer Advocate Timothy Jordan. TL;DR is where you can stay up to date on all the latest developer news at Google. \n\nTL;DR Playlist → https://goo.gl/cHuQkL\nSubscribe to Google Developers → http://goo.gl/mQyv5L`,
        videoId : `257lhkkhakA`,
      },
      {
        bgImage : `url(assets/imgs/home-slider-2.png)`,
        subBGImage : ``,
        tagInfo : `#SUPPORT AMBULANCE FUEL`,
        information : false,
        main : true,
        description1: `As part of the world's largest humanitarian network, the American Red Cross alleviates the suffering of victims of war, disaster and other international crises, and works with other Red Cross and Red Crescent societies to improve chronic, life-threatening conditions in developing nations.`,
        description2: `In peacetime as well as in the midst of conflict, whenever regular channels of communication are disrupted, the American Red Cross is available to help people obtain information about family members. Whenever possible, concerned families will be kept abreast of the whereabouts and well-being of relatives until personal communication can resume. (Requests to communicate with American citizens traveling or residing abroad are referred to the U.S. Department of State American Citizens Services.)`,
        author : `Support Ambulance Fuel`,
        authorIcon : `https://i.ytimg.com/vi/257lhkkhakA/hqdefault.jpg`,
        videoThumbnail : `assets/imgs/sample-banner-2.jpg`,
        title : `Why do we need your support with Ambulance Fuel`,
        descriptionVideo : `Learn Kotlin Fast → http://bit.ly/2xBXFFo\nWeb Notifications API in FCM → http://bit.ly/2xuT6gd\nML specialization on Coursera → http://bit.ly/2J4m1cd\nCloud ML Engine → http://bit.ly/2J2Vmg4\nGoogle Kubernetes Engine 1.10 → http://bit.ly/2J506Sq\nChrome 64 Beta → http://bit.ly/2xuIONc\n\n\nThis week’s TL;DR #DevShow is led by Google Developer Advocate Timothy Jordan. TL;DR is where you can stay up to date on all the latest developer news at Google. \n\nTL;DR Playlist → https://goo.gl/cHuQkL\nSubscribe to Google Developers → http://goo.gl/mQyv5L`,
        videoId : `257lhkkhakA`,
      }*/
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
    slider.bgImage = 'white';
  }

  informationCloseBtn(num){
    let slider = this.slidersData[num];
    slider.information = false;
    slider.main = true;
    slider.bgImage = slider.subBGImage;
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
