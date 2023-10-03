import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DauPageRoutingModule } from './dau-routing.module';

import { DauPage } from './dau.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DauPageRoutingModule,
    SharedModule
  ],
  declarations: [DauPage]
})
export class DauPageModule {}
