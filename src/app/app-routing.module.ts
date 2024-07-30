import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

var route: string = "user";
const logueado = JSON.parse(localStorage.getItem("loggedUser") || "false");

if (logueado) {
  //esta logueado
  route = "pages"
} else {
  //no esta logueado
  route = "login"
}
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: route,
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesPageModule),
  },
  {
    path: 'pages/encuesta/:id',
    loadChildren: () => import('./pages/encuesta/encuesta.module').then(m => m.EncuestaPageModule)
  },
  {
    path: 'pages/reclamo',
    loadChildren: () => import('./pages/reclamo/reclamo.module').then(m => m.ReclamoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
