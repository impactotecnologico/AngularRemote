import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  SERVER:string = 'http://localhost:8090/categoria/';

  constructor(public httpClient: HttpClient) { }

  retornarData(){
    return this.httpClient.get<Array<Categoria>>(this.SERVER);
  }

  retornarCategoria(id: number){
    return this.httpClient.get<Categoria>(this.SERVER + id);
  }

  crearCategoria(cat: Categoria){
    return this.httpClient.post<Categoria>(this.SERVER, cat);
  }

}
