import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrigonometryPage } from './trigonometry.page';

const routes: Routes = [
  {
    path: '',
    component: TrigonometryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrigonometryPageRoutingModule {}
