import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { PedidoComponent } from './lista-pedidos/pedido/pedido.component';
import { EditarPedidoComponent } from './lista-pedidos/editar-pedido/editar-pedido.component';
import { LogService } from './servicios/log.service';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemPedidoComponent } from './lista-pedidos/item-pedido/item-pedido.component';
import { HttpClientModule } from '@angular/common/http';


// app.module va a decir como funcionan los componentes

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaPedidosComponent,
    PedidoComponent,
    EditarPedidoComponent,
    ItemPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }