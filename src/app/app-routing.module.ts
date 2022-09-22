import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pulp-fiction',
    loadChildren: () => import('./pulp-fiction/pulp-fiction.module').then( m => m.PulpFictionPageModule)
  },  {
    path: 'poderoso-chefao',
    loadChildren: () => import('./poderoso-chefao/poderoso-chefao.module').then( m => m.PoderosoChefaoPageModule)
  },
  {
    path: 'homens-sentenca',
    loadChildren: () => import('./homens-sentenca/homens-sentenca.module').then( m => m.HomensSentencaPageModule)
  },
  {
    path: 'forrest-gump',
    loadChildren: () => import('./forrest-gump/forrest-gump.module').then( m => m.ForrestGumpPageModule)
  },
  {
    path: 'clube-da-luta',
    loadChildren: () => import('./clube-da-luta/clube-da-luta.module').then( m => m.ClubeDaLutaPageModule)
  },
  {
    path: 'o-pianista',
    loadChildren: () => import('./o-pianista/o-pianista.module').then( m => m.OPianistaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
