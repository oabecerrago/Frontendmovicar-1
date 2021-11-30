import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { AsignarVehiculoComponent } from './asignar-vehiculo/asignar-vehiculo.component';


@NgModule({
  declarations: [
    AsignarVehiculoComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
