import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarService,SharedService, UsuarioService } from "./service.index";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    UsuarioService
  ]
})
export class ServiceModule { }
