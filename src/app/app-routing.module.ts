import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cocktails',
    loadChildren: () =>
      import('./components/cocktails/cocktails.module').then(
        (m) => m.CocktailsModule
      ),
  },
  {
    path: 'champagne',
    loadChildren: () =>
      import('./components/champagne/champagne.module').then(
        (m) => m.ChampagneModule
      ),
  },
  {
    path: '**',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
