import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OPianistaPageRoutingModule } from './o-pianista-routing.module';

import { OPianistaPage } from './o-pianista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OPianistaPageRoutingModule
  ],
  declarations: [OPianistaPage]
})
export class OPianistaPageModule {}
