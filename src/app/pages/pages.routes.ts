import { RouterModule, Routes } from "@angular/router";
import { ListarComponent } from "./listar/listar.component";
import { PagesComponent } from "./pages.component";

const pagesRoutes: Routes = [
    {
      path: "",
      component: PagesComponent,
      children: [
        {
          path: "listar",
          component: ListarComponent,
          data: {
            titulo: "Archivos",
            descripcion: "Lista de Archivos",
            icon: "ik ik-user",
          },
        },  
        { path: "", redirectTo: "/listar", pathMatch: "full" },
      ],
    },
  ];
  
  export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
  