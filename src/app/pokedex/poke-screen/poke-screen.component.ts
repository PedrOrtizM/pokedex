import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from '../interface/pokemon.interface';


@Component({
  selector: 'app-poke-screen',
  templateUrl: './poke-screen.component.html',
  styleUrl: './poke-screen.component.scss'
})
export class PokeScreenComponent {
  @Input() pokeList: Result [] = [];
  @Output() onViewPokemon: EventEmitter<Result>;

  constructor() {
    this.onViewPokemon = new EventEmitter();
  }

  public viewPokemon(pokemon: Result): void {
    this.onViewPokemon.emit(pokemon);
  }
}
