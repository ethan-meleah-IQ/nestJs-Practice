import { Component, OnInit } from '@angular/core';

import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterSerivce: CharacterService) { }

  CHARS: Character[] = [];
  selectedCharacter?: Character;

  getChars(): void {
    this.characterSerivce.exampleGetChars()
        .subscribe(characters => this.CHARS = characters);
  }

  onSelect(character: Character) {
    this.selectedCharacter = character;
  }

  ngOnInit(): void {
    this.getChars();
  }

}
