import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http : HttpClient) { }
  getPokemonFromApi(){
    return this.http.get<any>('https://pokebuildapi.fr/api/v1/pokemon/limit/40')
  }

}
