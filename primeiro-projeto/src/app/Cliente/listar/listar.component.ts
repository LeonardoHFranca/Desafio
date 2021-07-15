import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: any;
  service: any;
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCliente()
    .subscribe((data:any)=>{
      this.clientes=data;
    })
  }

}
