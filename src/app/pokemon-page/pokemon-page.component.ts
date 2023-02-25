import { Component } from '@angular/core';
import { Pokemon } from '../shared/pokemon-model';
import { PokedexService } from '../shared/pokedex.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})

export class PokemonPageComponent {
pokemons: Pokemon[] = [];
currentpokemon: Pokemon = {
  name:'',
  image:'https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png',
  detail:'Attrappez les tous!',
};
constructor(private service: PokedexService){}
ngOnInit(){
  this.service.getPokemonFromApi().subscribe((data) => this.pokemons = data);
}
onPokemonChange(event: Pokemon){this.currentpokemon = event;}
}
