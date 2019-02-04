import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  usuario: Usuario[] = [];
  totalRegistros: number=0;
  constructor(
    public _ususarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios(){
  this._ususarioService.cargarUsuarios()
  .subscribe(resp=>{
    console.log(resp);
  });
  }

}
