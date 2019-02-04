import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }
  cargarUsuarios(){
    let url = URL_SERVICIOS + '/usuario';
    return this.http.get(url);
  }
}
