import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridad: SeguridadService: SeguridadService) { }

  ObtenerRegistros(): Observable<Modelo.vehiculo[]> {
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`);
  }

  CrearVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo> {
    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo,){
      headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })

    })
  })

}
