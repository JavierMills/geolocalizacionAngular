import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiamF2aWVybWlsbHMiLCJhIjoiY2wzb3RkOGFzMHJ0ZDNkcGFkMzU4NXM5biJ9.rbcvfwjvbQCdJQHWW0jqJg';

if (!navigator.geolocation) {
  alert('Tu Navegador no soporta la geolocalizacion');
  throw new Error('Tu Navagador no tiene acceso a tu geolacalizacion');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
