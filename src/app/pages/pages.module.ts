import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { PerfilComponent } from './perfil/perfil.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReservasComponent } from './reservas/reservas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent,
        PerfilComponent,
        HabitacionesComponent,
        ReservasComponent,
        UsuariosComponent,
        CategoriasComponent,
        ServiciosComponent,
    ],
    exports: [
        DashboardComponent,
        PagesComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }