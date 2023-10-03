import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MgtowPageRoutingModule } from './mgtow-routing.module';

import { MgtowPage } from './mgtow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MgtowPageRoutingModule
  ],
  declarations: [MgtowPage]
})
export class MgtowPageModule {}
