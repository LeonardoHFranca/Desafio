import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(cliente:any){
    this.service.createCliente(cliente)
    .subscribe((data:any)=>{
      alert("Feito com exito");
      this.router.navigate(["listar"]);
    })
  }
}
