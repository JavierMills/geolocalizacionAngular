//centralizamos todas la peticiones que vallan a ese api

import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  //sera proveido de manera global
  providedIn: 'root',
})
export class PlacesApiClient extends HttpClient {
  public baseUrl: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

  //nos permitira utilizar las peticiones http tipo get, post, put
  constructor(handler: HttpHandler) {
    super(handler);
  }

// sobre escrinbiremos el http para poder poner el nustro 
//<T> indica que es de tipo generico

  public override get<T>( url: string , options: {
      params?: HttpParams | {
          [params: string]: string | number | boolean | ReadonlyArray<string | number | boolean> 
      }
  }){
      url = this.baseUrl + url;
      return super.get<T>( url, {
          params:{
              limit: 5,
              languaje: "es",
              access_token: environment.apiKey,
              ...options.params,
          }

      })
  }
}
