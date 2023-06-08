import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.scss']
})
/**
 * @author Karla Anchondo
 * @version 1.0.0
 * 
 * 1. Se obtiene el nombre del pokemon del url através de ActivatedRoute en el ngOnInit guardandolo en @namePokemon
 * 2. Con el nombre obtiene el pokemon por medio del metodo @getPokemonByName 
 * 3. De la respueta del metodo guardo el @pokemon que se trajo por el url
 * 
 */
export class PokemonDescriptionComponent implements OnInit {

  pokemon!: PokemonInterface;
  namePokemon: string = "";

  constructor(public pokeapiService: PokeapiService,  public activatedRoute: ActivatedRoute)  { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:any) => this.namePokemon = res.name)
    this.getPokemonByName();
  }

  getPokemonByName(): void {
    this.pokeapiService.getPokemonByName(this.namePokemon).subscribe((res:PokemonInterface) => {
      this.pokemon = res;
    })
  }
}
