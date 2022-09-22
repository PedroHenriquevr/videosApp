import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoderosoChefaoPageRoutingModule } from './poderoso-chefao-routing.module';

import { PoderosoChefaoPage } from './poderoso-chefao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoderosoChefaoPageRoutingModule
  ],
  declarations: [PoderosoChefaoPage]
})
export class PoderosoChefaoPageModule {}
