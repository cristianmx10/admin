import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReservasComponent } from './reservas/reservas.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ServiciosComponent } from './servicios/servicios.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data:{titulo:'Inicio'} },
            { path: 'perfil', component: PerfilComponent, data:{titulo:'Perfil'} },
            { path: 'habitaciones', component: HabitacionesComponent, data:{titulo:'Habitaciones'} },
            { path: 'reserva', component: ReservasComponent, data:{titulo:'Reservar'} },

            { path: 'usuario', component: UsuariosComponent, data:{titulo:'Mantenimiento de usuarios'} },
            { path: 'categorias', component: CategoriasComponent, data:{titulo:'Categoria'} },
            { path: 'habitaciones', component: HabitacionesComponent, data:{titulo:'Habitacion'} },
            { path: 'servicios', component: ServiciosComponent, data:{titulo:'Servicio'} },
            { path: 'reservas', component: ReservasComponent, data:{titulo:'Reserva'} },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
            
        ]
    }
]
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);