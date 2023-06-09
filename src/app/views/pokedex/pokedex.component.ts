import { Component, OnInit } from '@angular/core';
import { PokedexInterface } from 'src/app/Interfaces/pokedex-interface';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { PokeapiService } from 'src/app/services/pokeapi.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemones!: PokedexInterface;
  loading: boolean = false;
  favoritos:any[] = [];
  constructor(public pokeApi : PokeapiService) { }

  ngOnInit(): void {
    const tempFavoritos = localStorage.getItem('favorito') || "";
    this.favoritos = JSON.parse(tempFavoritos); // Decomprime el arreglo comprimido

    console.log(this.favoritos);
    this.getPokemones()
  }

  getPokemones(): void {
    this.loading = false;
    this.pokeApi.getPokemons().subscribe((res:PokedexInterface) => {
      this.pokemones = res;
      this.forpoke();
      this.loading = true;
    });
  }

  forpoke(){
    for (let index = 0; index < this.pokemones.results.length; index++) {

      this.pokeApi.getPokemonByName(this.pokemones.results[index].name).subscribe((res:PokemonInterface)=>{
        this.pokemones.results[index].foto = res.sprites.front_default
      })
      
    }
  }

  agregarPokemonFavorito(name:string):void {
    if( this.favoritos.includes(name) ) return;

    this.favoritos.push(name)
    localStorage.setItem('favorito', JSON.stringify(this.favoritos));
  }
  // JSON.stringify comprime el arreglo de strings para poderse guardar
  
}
