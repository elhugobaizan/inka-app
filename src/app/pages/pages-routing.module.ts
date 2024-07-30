import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
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
        loadChildren: () => import('./salida/salida.module').then(m => m.SalidaPageModule)
      }
      /*{
        path: 'salidas',
        loadChildren: () => import('./salidas/salidas.module').then(m => m.SalidasPageModule)
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule { }
