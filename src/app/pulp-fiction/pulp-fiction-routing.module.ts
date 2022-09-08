import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulpFictionPage } from './pulp-fiction.page';

const routes: Routes = [
  {
    path: '',
    component: PulpFictionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulpFictionPageRoutingModule {}
