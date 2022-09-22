import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubeDaLutaPageRoutingModule } from './clube-da-luta-routing.module';

import { ClubeDaLutaPage } from './clube-da-luta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubeDaLutaPageRoutingModule
  ],
  declarations: [ClubeDaLutaPage]
})
export class ClubeDaLutaPageModule {}
