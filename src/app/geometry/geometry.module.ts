import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeometryPageRoutingModule } from './geometry-routing.module';

import { GeometryPage } from './geometry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeometryPageRoutingModule
  ],
  declarations: [GeometryPage]
})
export class GeometryPageModule {}
