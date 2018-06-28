import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import * as Config from '../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class WordpressService {

    public consumer_key:any;
    public sumer_secret:any;
    public userId:any;
    public options: any;
    dataInfo = {
        name: '',
        email: '',
        firstname: '',
        lastname:'',
        username:'',
        userId:''
    };
    public mytoken:any;

    constructor(private http: Http,private alertCtrl: AlertController,public storage:Storage, public authenticationService: AuthenticationService){

        this.consumer_key='ck_3bbcc0fa89ba85a0fde0b2cf1364b4874978a329';

        this.sumer_secret='cs_3a093ebabf273c72fc9ffadfc8be8659dac5b7bc';

        /** TO BE UNCOMMENTED BEFORE LIVE **/
        // this.authenticationService.getUser().then(sres=>{
        //   if(sres){
        //     this.userId = sres.id;
        //     this.dataInfo.email = sres.email;
        //     this.dataInfo.firstname = sres.displayname;
        //     this.dataInfo.username = sres.username;
        //     this.dataInfo.lastname = sres.displayname;
        //     this.mytoken = sres.token;
        //   }
        // })
        // console.log("USER_ID: "+this.userId);
        /** ****************************** **/


        var headers = new Headers();
        // headers.append('Access-Control-Allow-Origin' , '*');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept','application/json');
        headers.append('content-type','application/json');
        this.options = new RequestOptions({ headers:headers});

    }

    getRecentPosts(categoryId:number, page:number = 1){
        //if we want to query posts by category
        let category_url = categoryId? ("&categories=" + categoryId): "";

        return this.http.get(
            Config.WORDPRESS_REST_API_URL
            + 'posts?page=' + page
            + category_url)
            .map(res => res.json());
    }

    getAllPosts(){
        return this.http.get(
            Config.WORDPRESS_REST_API_URL
            + 'posts?categories=1')
            .map(res => res.json());
    }
    getTerms(){
        return this.http.get(
            Config.WORDPRESS_REST_API_URL
            + 'posts/32')
            .map(res => res.json());
    }
    getPrivacy(){
        return this.http.get(
            Config.WORDPRESS_REST_API_URL
            + 'posts/34')
            .map(res => res.json());
    }
    getProducts(){
        return this.http.get(
            Config.WORDPRESS_URL
            + 'wp-json/wooconnector/product/getproductbycategory/')
            .map(res => res.json());
    }

    saveCard (mytoken)
    {
        return this.http.get(
            Config.WORDPRESS_URL
            + '/pay_red/save.php?uid='+this.userId+"&token="+mytoken)
            .map(res => res.json());
    }
    createOrder(donation, oid)
    {
        var link = Config.WORDPRESS_URL+'/wp-json/wc/v2/orders?consumer_key='+this.consumer_key+'&consumer_secret='+this.sumer_secret;

        console.log(link);
        console.log("Credit_Card");
        console.log("user ids",+this.userId);
        var payment_title = 'Credit Card (Payfort)';

        let postParams = {
            "payment_method": "Credit_Card",
            "payment_method_title": payment_title,
            "customer_id": this.userId,
            "set_paid": true,
            "status": 'completed',
            "billing": {
                "first_name": this.dataInfo.firstname,
                "last_name": this.dataInfo.lastname,
                "country": "LB",
                "email": this.dataInfo.email,
                "phone": "123456789"
            },
            "line_items": [
                {
                    "product_id": donation.id,
                    "quantity": 1,
                    "subtotal": donation.value+"",
                    "subtotal_tax": "0.00",
                    "total": ""+donation.value,
                    "total_tax": "0.00",
                    "taxes": [],
                    "meta_data": [],
                    "sku": "",
                    "price": donation.value+""
                }
            ],
            "meta_data": [
                {
                    "key": "_source_contact_name",
                    "value": this.dataInfo.firstname
                },
                {
                    "key": "tmp_id",
                    "value": oid
                }
            ],

        };
        console.log(JSON.stringify(postParams));
        return this.http.post(link,postParams,this.options)
            .map(response => response.json());
    }


    getPhoneCode (phone)
    {
        return this.http.get(
            Config.WORDPRESS_URL
            + 'verify/sms.php?phone='+phone)
            .map(res => res.json());
    }


    registerUser(name, email, password, phone, kaza, district, village, streetnum, building, street){
        var link = Config.WORDPRESS_URL+'/wp-json/wp/v2/users?consumer_key='+this.consumer_key+'&consumer_secret='+this.sumer_secret;

        console.log(link);
        console.log("Credit_Card");
        console.log("user ids",+this.userId);
        var payment_title = 'Credit Card (Payfort)';

        let postParams = {
            "name": name,
            "password": password,
            "email": email,
            "username": email,
            "meta_data": [
                {
                    "key": "phone",
                    "value": phone
                },
                {
                    "key": "kaza",
                    "value": kaza
                },
                {
                    "key": "district",
                    "value": district
                },
                {
                    "key": "village",
                    "value": village
                },
                {
                    "key": "streetnum",
                    "value": streetnum
                },
                {
                    "key": "building",
                    "value": building
                },
                {
                    "key": "street",
                    "value": street
                }
            ],
        };
        console.log(JSON.stringify(postParams));
        return this.http.post(link,postParams,this.options)
            .map(response => response.json());
    }

}
