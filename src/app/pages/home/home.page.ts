import { Component } from '@angular/core';

import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude: any = 0;
  longitude: any = 0;

  constructor(
    private geolocation: Geolocation
  ) {
  }

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((res) => {
      this.latitude = res.coords.latitude;
      this.longitude = res.coords.longitude;
    }).catch((e) => {
      console.log('Error', e);
    });
  }
}
