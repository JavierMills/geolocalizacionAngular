import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-serch-bar',
  templateUrl: './serch-bar.component.html',
  styleUrls: ['./serch-bar.component.css']
})
export class SerchBarComponent{
//establecemos el timeout con node obtenemos las funcionabuilidaes de timeout
  private deBounceTimer?: NodeJS.Timeout;

  constructor(private placesService: PlacesService) { }
  
  onQueryChange( query: string=""){
  //si cambia el time out lo vamos a limpiar
    if(this.deBounceTimer) clearTimeout(this.deBounceTimer);
//colocamos el time para que ya con el texto completo se espere 500 milisegundo para lanzar la peticion

    this.deBounceTimer= setTimeout(() => {
      this.placesService.getPlacesByQuery( query );
    }, 550);
  }

}
