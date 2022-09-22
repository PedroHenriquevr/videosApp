import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomensSentencaPage } from './homens-sentenca.page';

const routes: Routes = [
  {
    path: '',
    component: HomensSentencaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomensSentencaPageRoutingModule {}
