import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaPageRoutingModule } from './manga-routing.module';

import { MangaPage } from './manga.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaPage]
})
export class MangaPageModule {}
