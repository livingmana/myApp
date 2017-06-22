import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import mapboxGlJs from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  // Rendering the map only when DOM is available
   public ionViewDidLoad(): void {
                mapboxGlJs.accessToken =
            'pk.eyJ1IjoibGFrc2htYW5hbmsiLCJhIjoiY2o0NDk5dWdmMDJqbjMxdXdxMmtqYzl1NCJ9.gA-9WQ6jLGWJYlQVykziVQ';
        /*
         * Disable the tslint rule for magic numbers,
         * since the latitude and longitude is hardcoded for
         * Carnegie location as POC which will be passed as an arguments in future
         */

        /** Coordinates to locate the center of the map (Using carnegie location as coordinates) @const {{}} map */
        const map: {} = new mapboxGlJs.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9', // tslint:disable-next-line:no-magic-numbers
            center:  [-74.50, 40],
            zoom: 9
        });
    }
}
