import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForrestGumpPage } from './forrest-gump.page';

const routes: Routes = [
  {
    path: '',
    component: ForrestGumpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForrestGumpPageRoutingModule {}
