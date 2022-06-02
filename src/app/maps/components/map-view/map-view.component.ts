import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit, OnInit {
  ngOnInit(): void {
    console.log(this.placesServides.userLocation);
  }
  // recuperamos el nombre de la vista para despues asiganarle un nombre
  @ViewChild('mapDiv')
  //asignamos un nombre tipo elementref el cual r
  // enderizara un elemento especifico del dom el el signo ! es que simpre va atraer algo con el
  mapDivElement!: ElementRef;

  constructor(private placesServides: PlacesService,
    private mapServices: MapService
    ) {}
  //despues de que la vista ha sido seleccionada
  ngAfterViewInit(): void {
    if (!this.placesServides.userLocation) throw Error('No hay localizacion');
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
      center: this.placesServides.userLocation, // starting position [lng, lat]
      zoom: 17, // starting zoom
    });

    const popup = new Popup().setHTML(`
         <h6>I'am here!!!</h6>
          <span> Desde Pocito 200 </span>
       `);

       new Marker({color: 'blue'}).setLngLat( this.placesServides.userLocation).setPopup(popup).addTo(map)

       this.mapServices.setMap( map);
  }
}
