import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url='http://127.0.0.1:3000';

  constructor(private http: HttpClient) {
    
   }
}
