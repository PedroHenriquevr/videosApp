import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomensSentencaPageRoutingModule } from './homens-sentenca-routing.module';

import { HomensSentencaPage } from './homens-sentenca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomensSentencaPageRoutingModule
  ],
  declarations: [HomensSentencaPage]
})
export class HomensSentencaPageModule {}
