import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  likedCoins = [];
  coins: Object;
  objectkeys = Object.keys;
  constructor(public navCtrl: NavController, private data: DataProvider, private storage: Storage) {
  this.storage.remove('likedCoins');
  }
  ionViewDidLoad() {

  }
  ionViewWillEnter() {
    this.refreshCoins();
  }
  refreshCoins() {
    this.storage.get('likedCoins').then((val) => {
      if (!val) {
        this.likedCoins.push('BTC','ETH','IOT');
        this.storage.set('likedCoins', this.likedCoins);
      } else {
        this.likedCoins = val;
      }
      this.data.getCoins(this.likedCoins)
        .subscribe(res => {
          this.coins = res;
        });
    })
  }
}
