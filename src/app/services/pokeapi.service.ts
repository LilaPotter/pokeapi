import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, tap } from 'rxjs';
import { PokedexInterface } from '../Interfaces/pokedex-interface';
import { PokemonInterface } from '../Interfaces/pokemon-interface';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  private offset:number = 0;
  private limit:number = 20;
  
  getPokemons(): Observable<PokedexInterface> {
    return this.http.get<PokedexInterface>(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`)
                    .pipe(tap(() => this.offset += 20
                    ))
  }
  getPokemonByName(name: string): Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  }
  getPokemonsGames(name: string){
    return this.http.get<any>(`https://pokeapi.co/api/v2/version/${name}/`)
  }
}
