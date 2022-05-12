import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes,{ useHash: true })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
export const APP_ROUTESS = RouterModule.forRoot(routes, { useHash: true });
