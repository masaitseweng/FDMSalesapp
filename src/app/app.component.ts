import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


import {LeaderboardPage} from '../pages/leaderboard/leaderboard';

import {LoginPage} from '../pages/login/login';
// import {ProductPage} from '../pages/product/product';
import {ProfilePage} from '../pages/profile/profile';
import { ApiProvider} from '../providers/api/api';


export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;

  //  rootPage:any = ProfilePage;
  rootPage:any = LoginPage;
  // rootPage:any = HomePage;
  // rootPage: any = ProductPage;

  appMenuItems: Array<MenuItem>;

  USERDATA:any
  userdata:any
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public  Api:ApiProvider) {



    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'LeaderBoard', component: LeaderboardPage, icon: 'clipboard'}
    ]; 
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  logout(){
    console.log("logout");
    this.nav.push(LoginPage);

  }

  profile(){

    this.nav.push(ProfilePage);

  }

  openPage(menuItem){
    console.log("inside", menuItem);


    if (menuItem.title == "Home"){
    
      this.nav.setRoot(HomePage) ;  
    }
    else if (menuItem.title == 'LeaderBoard'){
      this.nav.push(LeaderboardPage);
    }


  }




  
}

