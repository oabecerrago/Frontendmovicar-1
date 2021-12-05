import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path: "editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path: "buscar-usuario",
    component: BuscarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent
  },
  //Componentes vehiculos
  {
    path: "crear-vehiculo",
    component: CrearVehiculoComponent
  },
  {
    path: "editar-vehiculo",
    component: EditarVehiculoComponent
  },
  {
    path: "buscar-vehiculo",
    component: BuscarVehiculoComponent
  },
  {
    path: "eliminar-vehiculo",
    component: EliminarVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
