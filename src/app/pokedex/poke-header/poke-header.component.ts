import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonInterface } from '../interface/pokemon.interface';

@Component({
  selector: 'app-poke-header',
  templateUrl: './poke-header.component.html',
  styleUrl: './poke-header.component.scss'
})
export class PokeHeaderComponent {
  @Input() selectedPokemon!: PokemonInterface;
  @Output() onSearch: EventEmitter<string>;
  public search = '';

  constructor() {
    this.onSearch = new EventEmitter();
  }

  public searchPokenmon(): void {
    this.onSearch.emit(this.search);
  }
}
