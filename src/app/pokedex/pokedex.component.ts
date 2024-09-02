import { Component, OnInit } from '@angular/core';
import { PokemonInterface, PokeList, Result } from './interface/pokemon.interface';
import { Observable, tap } from 'rxjs';
import { PokeAPIService } from './services/pokemon/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent implements OnInit {

  public selectedPokemon!: Observable<PokemonInterface>;
  public pokeList!: Observable<PokeList>;
  public offset = 0;
  public showError = false;
  public readonly limit = 10;


  constructor(private pokeAPIService: PokeAPIService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  public searchPokenmon(pokemonId: string) {
    this.selectedPokemon = this.pokeAPIService.getPokemon(pokemonId)
      .pipe(tap({ next: () => this.showError = false, error: () => this.showError = true }));
  }

  public nextPage(): void {
    this.offset += this.limit;
    this.getPokemonList();
  }

  public previousPage(): void {
    this.offset -= this.limit;
    this.getPokemonList();
  }

  public viewPokemon(pokemon: Result) {
    this.selectedPokemon = this.pokeAPIService.getPokemonByUrl(pokemon.url);
  }

  public getPokemonList() {
    this.pokeList = this.pokeAPIService.getPokemonList(this.limit, this.offset)
      .pipe(tap({ next: () => this.showError = false, error: () => this.showError = true }));;
  }
}
