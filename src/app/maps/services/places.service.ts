
import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api/PlacesApiClient';
import { PlacesRespose, Feature } from '../interface/places';
import { MapService } from './map.service';


@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  //el signo de interrogacion por quen lam variabler puede ser opcional
  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] =[];

  get isUserLocationisReady(): boolean {
    return !!this.userLocation;
  }

  constructor(private placesApi: PlacesApiClient,
    private mapService: MapService ) {
    this.getUserLocartion();
  }

  //creamos metodo para obtener la geolocalizacion con una promesa
  public async getUserLocartion(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert('Sin Geolocalizacion');
          console.log(err);
          reject();
        }
      );
    });
  }
  getPlacesByQuery( query: string = ""){

    if( !this.userLocation) throw Error('No hay user Lacation');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesRespose>(`/${query}.json`, {
      params:{
        proximity: this.userLocation.join(',')
      }
    })
    .subscribe( resp => {
      this.isLoadingPlaces = false;
      this.places = resp.features;
      this.mapService.createMarkersFromPlaces(this.places, this.userLocation!);
    });

  }

  deletePlaces(){
    this.places = [];
  }
}
