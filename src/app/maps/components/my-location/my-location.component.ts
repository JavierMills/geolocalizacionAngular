import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.component.html',
  styleUrls: ['./my-location.component.css'],
})
export class MyLocationComponent {
  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  goToMyLocation() {
    if (!this.placesService.isUserLocationisReady) throw Error('No hay mapa que mostrar');
    if (!this.mapService.isMapReady) throw Error('El mapa aun no esta listo');

    this.mapService.flyTo( this.placesService.userLocation!);
  }
}
