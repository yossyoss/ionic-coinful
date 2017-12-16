import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class DataProvider {
  private BASE_URL = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=USD';
  res: any;
  constructor(public http: HttpClient) {
  }
  getCoins(coins) {
    let coinList = '';
    coinList = coins.join();

    return this.http.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinList}&tsyms=USD`)
      .map(res => this.res = res)
  }

}
