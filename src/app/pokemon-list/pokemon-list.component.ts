import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../shared/pokemon-model';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
@Input() pokemons: Pokemon[] = [];
@Output() pokemonChange: EventEmitter<Pokemon> = new EventEmitter();
SendPokemonToParent(pokemon : Pokemon){ this.pokemonChange.emit(pokemon)}
}