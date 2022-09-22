import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoderosoChefaoPage } from './poderoso-chefao.page';

const routes: Routes = [
  {
    path: '',
    component: PoderosoChefaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoderosoChefaoPageRoutingModule {}
