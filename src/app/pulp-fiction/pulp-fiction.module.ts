import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulpFictionPageRoutingModule } from './pulp-fiction-routing.module';

import { PulpFictionPage } from './pulp-fiction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulpFictionPageRoutingModule
  ],
  declarations: [PulpFictionPage]
})
export class PulpFictionPageModule {}
