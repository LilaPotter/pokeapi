import { Component, OnInit } from '@angular/core';
import { PokedexInterface } from 'src/app/Interfaces/pokedex-interface';
import { PokeapiService } from 'src/app/services/pokeapi.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(public pokeApi : PokeapiService) { }

  ngOnInit(): void {
  }

  getPokemones(){
    this.pokeApi.getPokemons().subscribe((res:PokedexInterface) => {

    });
  }

  
}
