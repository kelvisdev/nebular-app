import { Component } from '@angular/core';

import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Coordinate} from '../../shared/models/coordinate.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  coordinate: Coordinate = {
    latitude: 0,
    longitude: 0
  };

  constructor(
    private geolocation: Geolocation
  ) {
  }

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((res) => {
      this.coordinate.latitude = res.coords.latitude;
      this.coordinate.longitude = res.coords.longitude;
    }).catch((e) => {
      console.log('Error', e);
    });
  }
}
