import { Component } from '@angular/core';
import { PlacesService } from '../../services';
@Component({
  selector: 'app-maps-app',
  templateUrl: './maps-app.component.html',
  styleUrls: ['./maps-app.component.css']
})
export class MapsAppComponent {

  constructor(private placesServices: PlacesService) { }
  
  // creamos metodo para llamarlo en la vista del componete
  get isUserLocationReady(){
    // mandamos llamar al metodo que esta en el servicio llamado isUserLocationReady
    return this.placesServices.isUserLocationisReady
  }
}
