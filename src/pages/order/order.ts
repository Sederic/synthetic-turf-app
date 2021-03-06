import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsPage } from '../items/items';

/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OrderPage Page');
  }
  
  goToItems(){
    this.navCtrl.push(ItemsPage,{callback: this.myCallbackFunction, cart: this.cart});
  }

  runningTotal = 0;
  
  cart = {
      
    turf:{
      
    },
    items: {
    
    }
  
  };

  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
      this.runningTotal = _params.total;
      this.cart = _params.cart;
      resolve();
 });
}

}
