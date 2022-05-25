import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonDetailViewComponent } from './pokemon-detail-view/pokemon-detail-view.component';
import { StartscreenComponent } from './startscreen/startscreen.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedexDetail', component: PokemonDetailViewComponent },
  { path: '', component: StartscreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
