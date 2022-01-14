import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listaEmpleados: Empleado[] = [];

  nombreEmpleado="";
  apellidoEmpleado="";
  sexoEmpleado="";
  salarioEmpleado=0;
  
  filtro="todos"

  constructor() {
  }

  ngOnInit(): void {
  }

 
  getTotal(filtro:string):number {
    return this.filtrar(filtro).length;
  }

  filtrar(filtro:string): Empleado[]{
    return this.listaEmpleados.filter(e => e.sexo===filtro || filtro==="todos" )
  }

  private esEmpleadoValido():boolean{
    return this.nombreEmpleado!=="" &&
      this.apellidoEmpleado!=="" &&
      this.sexoEmpleado!=="" &&
      this.salarioEmpleado>0;
  }

  agregarEmpleado(){
    if(this.esEmpleadoValido()){
      let empleado = new Empleado(
          this.listaEmpleados.length,
          this.nombreEmpleado,
          this.apellidoEmpleado,
          this.sexoEmpleado,
          this.salarioEmpleado
      )
      this.listaEmpleados.push(empleado);

      this.nombreEmpleado="";
      this.apellidoEmpleado="";
      this.sexoEmpleado="";
      this.salarioEmpleado=0;
      document.querySelector('#tabla')?.scrollIntoView();
    }
  }
}
