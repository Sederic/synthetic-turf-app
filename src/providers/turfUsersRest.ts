import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TurfUsersRest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TurfUsersRest {

  constructor(public http: Http) {
    console.log('Hello TurfUsersRest Provider');
  }
  
  baseUrl = 'https://turf-backend-sederic.c9users.io/api/'
  path = 'turfUsers/'
  
   register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }
  
  login(credentials) {
    return this.http.post(
      this.baseUrl + this.path + 'login',
      credentials
    );
  }
  
  logout(token) {
    return this.http.post(
      this.baseUrl + this.path + 'logout' +
        '?access_token=' + token,
      {} //you have to pass an empty object because this is using the post
         //method and it is expecting two parameters of this function call
    );
  }  

}
