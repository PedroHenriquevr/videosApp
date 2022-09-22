import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubeDaLutaPage } from './clube-da-luta.page';

const routes: Routes = [
  {
    path: '',
    component: ClubeDaLutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubeDaLutaPageRoutingModule {}
