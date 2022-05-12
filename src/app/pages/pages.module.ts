import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { ShaderModule } from '../shader/shader.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ListarComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ShaderModule,
    PAGES_ROUTES,
    TableModule,
    InputTextModule
  ],
  exports:[ListarComponent]
})
export class PagesModule { }
