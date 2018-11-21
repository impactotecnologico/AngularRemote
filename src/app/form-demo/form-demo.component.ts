import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { NgForm } from '@angular/forms';
import { RemoteDataService } from '../services/remote-data.service';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styles: []
})
export class FormDemoComponent implements OnInit {

  public cat : Categoria;

  constructor(public remote: RemoteDataService) {
    this.cat = new Categoria();
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    console.log(this.cat);
    this.remote.crearCategoria(this.cat).subscribe(
      almacenamiento => {
        console.log(almacenamiento);
      }
    );
  }

  limpiar(f: NgForm){
    f.reset();
  }

}
