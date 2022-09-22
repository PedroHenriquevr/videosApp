import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OPianistaPage } from './o-pianista.page';

const routes: Routes = [
  {
    path: '',
    component: OPianistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OPianistaPageRoutingModule {}
