import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArithmeticPageRoutingModule } from './arithmetic-routing.module';

import { ArithmeticPage } from './arithmetic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArithmeticPageRoutingModule
  ],
  declarations: [ArithmeticPage]
})
export class ArithmeticPageModule {}
