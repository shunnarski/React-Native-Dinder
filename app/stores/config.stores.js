import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAe_EnftuGdd_S2uw3W1s-zjQFrM_lXLlk",
    authDomain: "dinder-fc37e.firebaseapp.com",
    databaseURL: "https://dinder-fc37e.firebaseio.com",
    projectId: "dinder-fc37e",
    storageBucket: "dinder-fc37e.appspot.com",
    messagingSenderId: "449297578000"
  };

export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config);
    this.splashTime = 1000;
    this.splashImg = require('../../images/splash.jpg');
    this.loginBG = require('../../images/login.jpg');
  }

  get SplashImg() {
    return this.splashImg;
  }

  get SplashTime() {
    return this.splashTime;
  }

  get LoginBG() {
    return this.loginBG;
  }
}
