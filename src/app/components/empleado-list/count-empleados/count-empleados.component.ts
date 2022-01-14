import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  radioButtonSeleccionado = 'todos'
  @Input() cantMujeres:number = 0;
  @Input() cantHombres:number = 0;
  @Input() cantTodos:number = 0;
  @Output() filtroChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  pasarFiltro(){
    this.filtroChange.emit(this.radioButtonSeleccionado)
  }
}
