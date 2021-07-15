import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  //ligar com o backend
  Url="http://localhost:8080/primeiro/cliente";

  //para retornar lista do banco
  getCliente(){
    return this.http.get<Array<any>>(this.Url);
  }

  //para enviar ao banco
  createCliente(cliente:any){
    return this.http.post<any>(this.Url,cliente);
  }

}
