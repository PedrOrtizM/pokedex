import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokeScreenComponent } from './poke-screen/poke-screen.component';
import { PokeDescriptionComponent } from './poke-description/poke-description.component';
import { FormsModule } from '@angular/forms';
import { PokeHeaderComponent } from './poke-header/poke-header.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokeScreenComponent,
    PokeDescriptionComponent,
    PokeHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokedexModule { }
