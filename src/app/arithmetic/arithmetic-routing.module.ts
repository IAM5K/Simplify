import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArithmeticPage } from './arithmetic.page';

const routes: Routes = [
  {
    path: '',
    component: ArithmeticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArithmeticPageRoutingModule {}
