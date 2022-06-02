import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsAppComponent } from './screens/maps-app/maps-app.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MyLocationComponent } from './components/my-location/my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { WavyComponent } from './components/wavy/wavy.component';
import { SerchBarComponent } from './components/serch-bar/serch-bar.component';
import { SerchResultsComponent } from './components/serch-results/serch-results.component';



@NgModule({
  declarations: [
    MapsAppComponent,
    MapViewComponent,
    LoadingComponent,
    MyLocationComponent,
    AngularLogoComponent,
    WavyComponent,
    SerchBarComponent,
    SerchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapsAppComponent
  ]
})
export class MapsModule { }
