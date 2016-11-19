import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TurfUsersRest } from '../../providers/turfUsersRest';
import { LobbyPage } from '../lobby/lobby';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public RestTurfUsers: TurfUsersRest) {}
    
    IonViewDidLoad() {
    console.log('Hello LoginPage Page');
  }
  
  turfUsers = {}
  
  signIn(form){
    if(form.invalid) 
      return alert("Please fill in all of the required fields.");
  
    this.RestTurfUsers.login(this.turfUsers)
    this.navCtrl.push(LobbyPage);
}

  
   
  

  }

