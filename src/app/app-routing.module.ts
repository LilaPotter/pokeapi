import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './views/pokedex/pokedex.component';
import { PokemonDescriptionComponent } from './views/pokemon-description/pokemon-description.component';
import { FavoritesComponent } from './views/favorites/favorites.component';

const routes: Routes = [
  { path: 'pokedex', component:PokedexComponent },
  { path: 'pokemon-description/:name', component:PokemonDescriptionComponent },
  { path: 'favorites', component:FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
