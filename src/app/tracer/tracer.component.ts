import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-tracer',
  templateUrl: './tracer.component.html',
  styles: []
})
export class TracerComponent implements OnInit {

  constructor(public servicio: LogService) {

    servicio.escribirTraza("Estoy en el constructor","Con un segundo parametro");
   }

  ngOnInit() {
    this.servicio.escribirTraza("En el onInit");
    this.servicio.escribirWarning("En el onInit con un warning");
    this.servicio.escribirError("En el onInit con un error ");
  }

}
