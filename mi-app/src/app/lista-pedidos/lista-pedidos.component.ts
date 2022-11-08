import { Component, OnInit } from '@angular/core';
import {LogService} from '../servicios/log.service';
import {Pedido} from '../model/pedido';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit
{
  pedidos: Pedido[] = [];

  estadoListadoPedidos: String = 'noEntregado';

  // Inyecta una instancia de logservice
  constructor(private log:LogService)
  {
    this.pedidos = [{
      id: 1,
      user: "Luis Manuel",
      desc: "Huevos",    
      fechaPedido: new Date(),
      entregado: false
    }, 
    {
      id: 2,
      user: "Federico Garcia",
      desc: "Petroleo",    
      fechaPedido: new Date(),
      entregado: true
    },
    {
      id: 3,
      user: "Manolo Cabezabolo",
      desc: "Manzanas",    
      fechaPedido: new Date(),
      entregado: false
    }]
  }

  ngOnInit(): void
  {
    console.log("... ...");
    var a: any=1;
    var b: any='1';

    console.log("a == b: " +(a==b));
    console.log("a === b: " +(a===b));
  }

  public onAltaPedido(): void
  {
    console.log('abrir formulario edicion pedido');
  }

}
