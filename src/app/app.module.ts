import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { TurfUsersRest } from "../providers/turfUsersRest";
import { LoginPage } from '../pages/login/login';
import { OrderPage } from '../pages/order/order';
import { ItemsPage } from '../pages/items/items';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    RegisterPage,
    LobbyPage,
    LoginPage,
    OrderPage,
    ItemsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    RegisterPage,
    LobbyPage,
    LoginPage,
    OrderPage,
    ItemsPage
  ],
  providers: [TurfUsersRest]
})
export class AppModule {}
