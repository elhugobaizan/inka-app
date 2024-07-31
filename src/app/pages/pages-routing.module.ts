import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'encuestas',
        loadChildren: () => import('./encuestas/encuestas.module').then(m => m.EncuestasPageModule)
      },
      {
        path: 'reclamos',
        loadChildren: () => import('./reclamos/reclamos.module').then(m => m.ReclamosPageModule)
      },
      {
        path: 'salida/:id',
        loadChildren: () => import('./salidas/salida.module').then(m => m.SalidaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule { }
