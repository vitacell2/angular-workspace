import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onEntregarPedido()
  {
    console.log('llamar a un servicio que diga que esta entregado' + this.id);
    
    // emito un evento para que el padre sepa que ha entregado
    this.entregaRealizada.emit(this.id);
  }

}
