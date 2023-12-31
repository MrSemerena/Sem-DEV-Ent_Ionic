import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorrorPageRoutingModule } from './horror-routing.module';

import { HorrorPage } from './horror.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorrorPageRoutingModule,
    SharedModule
  ],
  declarations: [HorrorPage]
})
export class HorrorPageModule {}
