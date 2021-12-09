import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';



@Component({
  selector: 'app-menu-navb',
  templateUrl: './menu-navb.component.html',
  styleUrls: ['./menu-navb.component.css']
})
export class MenuNavbComponent implements OnInit {

  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService) { }


  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerInformacionSesion().subscribe((datos: ModeloIdentificar) => {
    this.seInicioSesion = datos.estaIdentificado;
    })
  }

}
