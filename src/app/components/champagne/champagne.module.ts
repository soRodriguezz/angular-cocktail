import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampagneRoutingModule } from './champagne-routing.module';
import { ChampagneComponent } from './champagne.component';


@NgModule({
  declarations: [
    ChampagneComponent
  ],
  imports: [
    CommonModule,
    ChampagneRoutingModule
  ]
})
export class ChampagneModule { }
