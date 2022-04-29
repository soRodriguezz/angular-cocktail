import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampagneComponent } from './champagne.component';

const routes: Routes = [{ path: '', component: ChampagneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampagneRoutingModule { }
