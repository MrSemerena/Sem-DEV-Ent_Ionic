import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DauPage } from './dau.page';

const routes: Routes = [
  {
    path: '',
    component: DauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DauPageRoutingModule {}
