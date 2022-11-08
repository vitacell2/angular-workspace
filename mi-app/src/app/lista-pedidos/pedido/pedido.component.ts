import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/model/pedido';
import { LogService } from 'src/app/servicios/log.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido: Pedido;

  constructor(private log: LogService, 
             private route: ActivatedRoute,
             private  pedidoService : PedidosService) 
  {
   /* this.pedido =
    {
      id:1,
      desc:'Zapatos',
      entregado: false,
      fechaPedido: new Date(),
      user: 'Luis'
    };*/

    // route es un objeto que tiene la URL actual pedido/:id
   let id = this.route.snapshot.params['id'];
   this.pedido = this.pedidoService.getPedido(id);

  }

  ngOnInit(): void {
  }

}
