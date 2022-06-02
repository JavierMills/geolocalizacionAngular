//centralizamos todas la peticiones que vallan a ese api
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  //sera proveido de manera global
  providedIn: 'root',
})
export class DirectiosApiClient extends HttpClient {
  public baseUrl: string = 'https://api.mapbox.com/directions/v5/mapbox/driving';

  //nos permitira utilizar las peticiones http tipo get, post, put
  constructor(handler: HttpHandler) {
    super(handler);
  }

// sobre escrinbiremos el http para poder poner el nustro 
//<T> indica que es de tipo generico

  public override get<T>( url: string){
      url = this.baseUrl + url;
      return super.get<T>( url, {
          params:{
            alternatives: false,
            geometries: "geojson",
            language: "es",
            overview: "simplified",
            steps: false,
              access_token: environment.apiKey,
          }

      })
  }
}
