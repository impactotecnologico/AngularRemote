import { Component, OnInit } from '@angular/core';
import { RemoteDataService } from '../services/remote-data.service';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  data: Observable<Array<Categoria>>;
  listado: Array<Categoria>;
  unaCategoria:Categoria;

  constructor(public remote: RemoteDataService) { }

  ngOnInit() {
    this.data = this.remote.retornarData();

    this.data.subscribe(arrayData => {
      this.listado = arrayData;
    });
  }

  verDetalles(id: number){
    this.remote.retornarCategoria(id).subscribe(item => {
      console.log(item);

    });
  }

}
