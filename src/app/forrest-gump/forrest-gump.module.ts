import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForrestGumpPageRoutingModule } from './forrest-gump-routing.module';

import { ForrestGumpPage } from './forrest-gump.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForrestGumpPageRoutingModule
  ],
  declarations: [ForrestGumpPage]
})
export class ForrestGumpPageModule {}
