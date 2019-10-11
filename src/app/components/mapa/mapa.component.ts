import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

declare var mapboxgl;

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.scss"]
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa', null) mapa: ElementRef;

  constructor() {}

  ngOnInit() {
    const latLng = this.coords.split(",");

    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    console.log(this.coords);
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWxleG5hcnZhZXoiLCJhIjoiY2sxOHRvNHBrMGVzdTNmcDE0amcwb3hnbCJ9.PjGCmXdnTgrm62EJ4zSH4Q";
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 15
    });

    var marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(map);
  }
}
