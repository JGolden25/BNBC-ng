import { MapComponent } from './map.component';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MapComponent  
  ],
  exports: [
    MapComponent
  ],
  imports: [
AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBKTqGnyFpUhrMYU3HfgHqH_FaH3qUzxhw'
})
  ],
  providers: []
  
})
export class MapModule { }
