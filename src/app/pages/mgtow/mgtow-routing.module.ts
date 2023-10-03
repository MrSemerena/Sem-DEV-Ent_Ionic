import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MgtowPage } from './mgtow.page';

const routes: Routes = [
  {
    path: '',
    component: MgtowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MgtowPageRoutingModule {}
