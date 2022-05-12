import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    // public _sidebar: SidebarService
  ) { }
  menuArr:any = [
    /* {
       titulo: 'Inicio',
       icono: 'ik ik-align-justify',
       url: '/dashboard',
       submenu:[]
     },*/
     {
       titulo: 'Lista',
       icono: 'ik ik-user',
       url: '/listar',
       submenu:[]
     },
    //  {
    //    titulo: 'Rutas',
    //    icono: 'ik ik-file-text',
    //    url: '/rutas',
    //    submenu:[]
    //  }
   ];
  ngOnInit(): void {
  }

}
