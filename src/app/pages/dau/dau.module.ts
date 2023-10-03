import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DauPageRoutingModule } from './dau-routing.module';

import { DauPage } from './dau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DauPageRoutingModule
  ],
  declarations: [DauPage]
})
export class DauPageModule {}
