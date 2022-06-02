import { Component } from '@angular/core';
import { Feature } from '../../interface/places';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-serch-results',
  templateUrl: './serch-results.component.html',
  styleUrls: ['./serch-results.component.css']
})
export class SerchResultsComponent {


  public seletedId : string ="";

  constructor(private placesService: PlacesService,
    private mapService: MapService) { }

  get isLoadingPlaces(): boolean{
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this.placesService.places;
  }

  flyTo(place : Feature){
    this.seletedId = place.id;
  const[lng, lat] = place.center;
  this.mapService.flyTo([lng, lat]);
  }
  getDirections( place: Feature ){

    if ( !this.placesService.userLocation) throw Error("Localizacion Nula");

    this.placesService.deletePlaces();

  const start = this.placesService.userLocation;
  const end= place.center as [number, number]

    this.mapService.getRouteBetweenPoints(start, end);
  }

}
