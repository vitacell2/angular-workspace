import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { PedidoComponent } from './lista-pedidos/pedido/pedido.component';
import { EditarPedidoComponent } from './lista-pedidos/editar-pedido/editar-pedido.component';

// app.module va a decir como funcionan los componentes

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaPedidosComponent,
    PedidoComponent,
    EditarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
