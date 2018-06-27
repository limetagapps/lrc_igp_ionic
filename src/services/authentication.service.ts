import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http, Headers } from '@angular/http';
import * as Config from '../config';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthenticationService {

  constructor(
    public nativeStorage: NativeStorage,
    public http: Http,
    public storage:Storage
  ){}

  getUser(){
    return this.nativeStorage.getItem('User');
  }

  setUser(user){
    return this.nativeStorage.setItem('User', user);
  }

  logOut(){
    return this.nativeStorage.clear();
  }

  doLogin(username, password){
    return this.http.post(Config.WORDPRESS_URL + 'wp-json/jwt-auth/v1/token',{
      username: username,
      password: password
    })
  }

  getUserWP(){
    return this.http.post(Config.WORDPRESS_URL + 'wp-json/wp/v2/users/me ',{})
  }

  doRegister(user_data, token){
    return this.http.post(Config.WORDPRESS_REST_API_URL + 'users?token=' + token, user_data);
  }

  validateAuthToken(token){
    let header : Headers = new Headers();
    header.append('Authorization','Basic ' + token);
    return this.http.post(Config.WORDPRESS_URL + 'wp-json/jwt-auth/v1/token/validate?token=' + token,
      {}, {headers: header})
  }

}

