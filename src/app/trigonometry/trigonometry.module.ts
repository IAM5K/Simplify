import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrigonometryPageRoutingModule } from './trigonometry-routing.module';

import { TrigonometryPage } from './trigonometry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrigonometryPageRoutingModule
  ],
  declarations: [TrigonometryPage]
})
export class TrigonometryPageModule {}
