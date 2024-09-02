import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeList, PokemonInterface } from '../../interface/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  public getPokemon(pokemon: string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(`${this.apiUrl}/${pokemon}`);
  }

  public getPokemonByUrl(url: string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(url);
  }
  public getPokemonList(limit = 10, offset = 10) {
    return this.http.get<PokeList>(`${this.apiUrl}?limit=${limit}&offset=${offset}`)
  }
}