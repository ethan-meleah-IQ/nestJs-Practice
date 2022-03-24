import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from './character';
import { CHARS } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { 

  }

  private urlString = 'http://localhost/3000/characters';

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlString)
      // .pipe(
      //   catchError(this.handleError<Hero[]>('getHeroes', []))
      // );
  }
  
  exampleGetChars(): Observable<Character[]>  {
     const characters = of(CHARS);
     return characters;
  }

  exampleGetChar(name: String): any {
    const character = of(CHARS.find( character => character.name))
    return character;
  }

}

//FOLLOW THE ADD api tutorial