import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { FavoritesInterface } from 'src/app/Interfaces/favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites : FavoritesInterface[] = [];
  pokemonNames : string[] = []

  constructor(public pokeApi : PokeapiService) { }

  ngOnInit(): void {
    const tempFavoritos = localStorage.getItem('favorito') || "";
    this.pokemonNames = JSON.parse(tempFavoritos); // Decomprime el arreglo comprimido
    this.forpoke();
  }

  forpoke(){
    
    for (let index = 0; index < this.pokemonNames.length; index++) {

      this.pokeApi.getPokemonByName(this.pokemonNames[index]).subscribe((res:PokemonInterface)=>{
        this.favorites.push( { name: res.name, foto: res.sprites.front_default } );
      })
      
    }
  }

}
