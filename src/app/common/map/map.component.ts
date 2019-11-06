import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  @Input() location: string;

  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
