import { MapComponent } from './map.component';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from 'ngx-pipes';
import { MapService } from './map.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent  
  ],
  exports: [
    MapComponent
  ],
  imports: [
AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDW9tFSqG2mA0ym2NluRBVGZ6tPr8xbwRM'
}),
CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
  
})
export class MapModule { }
