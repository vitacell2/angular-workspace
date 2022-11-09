import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';
import { PedidosHttpService } from 'src/app/servicios/pedidos-http.service';
import { Pedido } from 'src/app/model/pedido';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css']
})
export class ItemPedidoComponent implements OnInit
{
  @Input() id: number = 0;
  @Input() descripcion: string = '';
  @Input() entregado: boolean = false;

  // EMISOR DE EVENTOS
  @Output() entregaRealizada: EventEmitter<number> = new EventEmitter<number>();

  constructor
  (
    private log: LogService, 
    private pedidosHttpService: PedidosHttpService, 
    private pedidosService: PedidosService)
  {

  }

  ngOnInit(): void {
  }

  onEntregarPedido()
  {
    console.log('llamar a un servicio que diga que esta entregado' + this.id);
    //this.pedidosService.cambiarEstadoPedido(this.id, true);

    let pMod = {id: this.id, desc:this.descripcion, user: 'Luis',
         entregado: true, fechaPedido: new Date()}
    this.pedidosHttpService.update(pMod).subscribe(
      (p: Pedido) =>   //emito un evento para que el padre sepa que he entregado

    // emito un evento para que el padre sepa que ha entregado
    this.entregaRealizada.emit(this.id)
    );

  }

  onBorrarPedido()
  {
    this.log.info(' llama ajax para borrar un pedido ');
    this.pedidosHttpService.delete(this.id).subscribe
    (
      () => {console.log('borrado');
      this.entregaRealizada.emit(this.id);
            },
      error => console.log('error: '+ error)
    );
  }



}
