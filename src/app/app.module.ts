import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabaseModule } from "angularfire2/database";



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {LeaderboardPage} from '../pages/leaderboard/leaderboard'
import {ProductPage} from '../pages/product/product';
import {ProductitemsPage} from '../pages/productitems/productitems';
import {NotificationsPage} from '../pages/notifications/notifications';

import { ApiProvider } from '../providers/api/api';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// import { Network } from '@ionic-native/network';
import { ViewPage} from '../pages/view/view';
import { SendquotePage} from '../pages/sendquote/sendquote';
import { AddqtyPage} from '../pages/addqty/addqty';
import { AdddiscountPage} from '../pages/adddiscount/adddiscount';
import { OutstandingPage} from '../pages/outstanding/outstanding';
import { InvoicePage} from '../pages/invoice/invoice';
import {ProfilePage} from '../pages/profile/profile';

import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LeaderboardPage,
    ProductPage,
    ProductitemsPage,
    NotificationsPage,
    ViewPage,
    SendquotePage,
    AddqtyPage,
    AdddiscountPage,
    OutstandingPage,
    InvoicePage,
    ProfilePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
   
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    //     AngularFireModule.initializeApp({
    //       apiKey: "AIzaSyCznBPV2A_rxjsZ6ZQSfCRTV3C9jfL3gDw",
    //       authDomain: "fdmapp-a3271.firebaseapp.com",
    //       databaseURL: "https://fdmapp-a3271.firebaseio.com",
    //       projectId: "fdmapp-a3271",
    //       storageBucket: "fdmapp-a3271.appspot.com",
    //       messagingSenderId: "747748924182" 
    // }),
    // AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LeaderboardPage,
    ProductPage,
    ProductitemsPage,
    NotificationsPage,
    ViewPage,
    SendquotePage,
    AddqtyPage,
    AdddiscountPage,
    OutstandingPage,
    InvoicePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    Camera,
    FileTransfer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    // Network,
  ]
})
export class AppModule {}
