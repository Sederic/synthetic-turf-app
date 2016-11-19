import { Component } from '@angular/core';
import { LobbyPage} from '../lobby/lobby';
import { NavController } from 'ionic-angular';
import { TurfUsersRest } from '../../providers/turfUsersRest';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public RestTurfUsers: TurfUsersRest) {}
  
  ionViewDidLoad() {
    console.log("Hello Register Page");
  }            
  
  turfUsers = {};
  
  signupForm(form) {
    if (form.invalid)
      return alert("Please fill in all the required fields.");
      
    this.RestTurfUsers.register(this.turfUsers)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      alert("Warning Will Robinson");
    });
    }
    
    accountLogin(){
      this.navCtrl.push(LoginPage);
  }
}
