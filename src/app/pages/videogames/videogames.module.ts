import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideogamesPageRoutingModule } from './videogames-routing.module';

import { VideogamesPage } from './videogames.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideogamesPageRoutingModule,
    SharedModule
  ],
  declarations: [VideogamesPage]
})
export class VideogamesPageModule {}
