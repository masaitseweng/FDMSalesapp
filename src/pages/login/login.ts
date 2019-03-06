import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ApiProvider} from '../../providers/api/api'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = { "email": "", "password": "" }

  login: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  
    console.log("logion details", this.userData)


    // // watch network for a disconnect
    // let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //   console.log('network was disconnected :-(');
    // });

    // // stop disconnect watch
    // disconnectSubscription.unsubscribe();


    // // watch network for a connection
    // let connectSubscription = this.network.onConnect().subscribe(() => {
    //   console.log('network connected!');
    //   // We just got a connection but we need to wait briefly
    //   // before we determine the connection type. Might need to wait.
    //   // prior to doing any api requests as well.
    //   setTimeout(() => {
    //     if (this.network.type === 'wifi') {
    //       console.log('we got a wifi connection, woohoo!');
    //     }
    //   }, 3000);
    // });

    // // stop connect watch
    // connectSubscription.unsubscribe();

 



  }


  onlogin(userData) {
 


    console.log("testing", userData)

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000
    });

    loader.dismiss();

    loader.present().then(() => {


 
  var test = {"email":"masa@gmail.com","password":"12345"}



      this.Api.postLogin(userData).subscribe(DATA => {
 
      console.log("objects", DATA)

      this.login = DATA

        localStorage.setItem('USER-DATA', JSON.stringify(DATA) );

      if (typeof this.login.error == 'undefined' && this.login.error == null) {
        loader.dismiss();

        this.navCtrl.setRoot(HomePage,{
        })
      }

      else {
        loader.dismiss();

        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'login failed please try again',
          buttons: ['OK']
        });
        alert.present();
      }

    }, (err) => {

      loader.dismiss();

      console.log(err)
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'User ' + err.statusText,
        buttons: ['OK']
      });
      alert.present();


    })

    })


    console.log("login")
  }
  
  






  // login(){

  //   // this.root.push(HomePage)
  //   this.navCtrl.setRoot(HomePage)
    
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
