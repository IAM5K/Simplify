import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeometryPage } from './geometry.page';

const routes: Routes = [
  {
    path: '',
    component: GeometryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeometryPageRoutingModule {}
