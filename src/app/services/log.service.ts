import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  escribirTraza(...mensaje: string[]) {

    mensaje.forEach(msg => {
      console.log(msg)
    });

  }

  escribirWarning(...mensaje: string[]) {

    mensaje.forEach(msg => {
      console.warn(msg)
    });

  }

  escribirError(...mensaje: string[]) {

    mensaje.forEach(msg => {
      console.error(msg)
    });

  }


}
