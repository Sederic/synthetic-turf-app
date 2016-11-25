import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { OrderPage } from '../order/order';

/*
  Generated class for the Items page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {

  constructor(public navCtrl: NavController,
              private navParams: NavParams) {}

  turf = [
  {
    "grass_id": "PL 919 Field/Olive",
    "grass_price": 2.3,
    "id": "582e450270f7dd8d0820377a"
  },
  {
    "grass_id": "PL 921 Field",
    "grass_price": 2.59,
    "id": "582e451c70f7dd8d0820377b"
  },
  {
    "grass_id": "PL 906 Field/Lime",
    "grass_price": 2.9,
    "id": "582e454270f7dd8d0820377c"
  },
  {
    "grass_id": "PL 906 Field/Olive",
    "grass_price": 3,
    "id": "582e455770f7dd8d0820377d"
  },
  {
    "grass_id": "PL 921 Field/Olive",
    "grass_price": 2.7,
    "id": "582e456a70f7dd8d0820377e"
  },
  {
    "grass_id": "PL 77 Veridian (putting GREEN)",
    "grass_price": 2.3,
    "id": "582e458470f7dd8d0820377f"
  },
  {
    "grass_id": "PL 921 Field/Lime",
    "grass_price": 2.6,
    "id": "582e45ab70f7dd8d08203780"
  }
]

  items = [
  {
    "item_id": "Weed Block Sqft",
    "item_price": 0.1,
    "id": "582e462070f7dd8d08203781"
  },
  {
    "item_id": "Bender Board 20ft Package",
    "item_price": 20.82,
    "id": "582e463770f7dd8d08203782"
  },
  {
    "item_id": "San silica #30 100lb Bag",
    "item_price": 6,
    "id": "582e464770f7dd8d08203783"
  },
  {
    "item_id": "DG - West Coast 1 ton",
    "item_price": 27,
    "id": "582e465870f7dd8d08203784"
  },
  {
    "item_id": "Glue Mapei UltraBond 5 Gal",
    "item_price": 250,
    "id": "582e466c70f7dd8d08203785"
  }
] 

  cart: any = {
      
    turf:{
      
    },
    items: {
    
    }
  }
  // {
      
  //   turf:{
      
  //   },
  //   items: {
    
  //   }
  // }
  
  
  turfObj:any = {};
  callback: any;
  
  ionViewDidLoad() {
    this.cart = this.navParams.get("cart");
    console.log('Hello ItemsPage Page');
      for (var i in this.turf){
        this.turfObj[this.turf[i].grass_id] = this.turf[i]
      }
      console.log(this.turfObj);
    }
    
    ionViewWillEnter() {
      this.callback = this.navParams.get("callback")
 }
  
  submitItems(){
    var runningTotal = 0;
    for (var i in this.cart.turf){
      runningTotal += this.cart.turf[i]  * this.turfObj[i].grass_price;
      //this.turfObj[i].grass_price
    }
    this.callback({
      cart: this.cart,
      total: runningTotal,
    }).then(()=>{
      this.navCtrl.pop();
    });
   
  }
  
  
  
  
  
  OrderItems = "Turf";
  
  



}

