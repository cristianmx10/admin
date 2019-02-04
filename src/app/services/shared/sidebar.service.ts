import { Injectable } from '@angular/core';

@Injectable()

export class SidebarService {
  menu1: any = [
    {
      titulo: 'Usuario',
      icono: 'fa fa-user',
      submenu: [
        { titulo: 'Perfil', url: '/perfil', icono: 'fa fa-user' },
        { titulo: 'Habitaciones', url: '/habitaciones', icono: 'fa fa-bed' },
        { titulo: 'Reservas', url: '/reservas', icono: 'fa fa-calendar' }
      ]
    },
    {
      titulo: 'Administrador',
      icono: 'fa fa-gears',
      submenu: [
        { titulo: 'Usuarios', url: '/usuario', icono: 'fa fa-user' },
        { titulo: 'Categorias', url: '/categorias', icono: 'fa fa-th-list' },
        { titulo: 'Habitacion', url: '/habitaciones', icono: 'fa fa-bed' },
        { titulo: 'Servicios', url: '/servicios', icono: 'fa fa-share-alt' },
        { titulo: 'Reservas', url: '/reservas', icono: 'fa fa-calendar' }
      ]
    }
  ]
  constructor() { }
}