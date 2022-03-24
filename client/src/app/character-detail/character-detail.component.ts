import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARS } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor() { }

  exampleChar?: Character = CHARS[0];
  mods: number[] = [+3, 0, +4, -1, +1, +5];
  history?: String[] = [];
  lastRoll?: String;

  clearRolls() {
    this.history = [];
  }

  //TODO: Replace this repeated code with one function that takes the mod and changes accordingly
  //This is embarrasing but code broke right before demo so you do what ya gotta do

  rollStr() {
    const rolled = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    this.history?.push("Strength Roll: " + (rolled + 3) + ", " + rolled + " + 3");
    this.lastRoll = "Strength Roll: " + (rolled + 3) + ", " + rolled + " + 3";
    return rolled + this.mods[0];
  }

  rollDex() {
    const rolled = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    this.history?.push("Dexterity Roll: " + (rolled + 0) + ", " + rolled + " + 0");
    this.lastRoll = "Dexterity Roll: " + (rolled + 0) + ", " + rolled + " + 0";
    return rolled + this.mods[0];
  }

  rollCon() {
    const rolled = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    this.history?.push("Constitution Roll: " + (rolled + +4) + ", " + rolled + " + 4");
    this.lastRoll = "Constitution Roll: " + (rolled + +4) + ", " + rolled + " + 4";
    return rolled + this.mods[0];
  }

  rollWis() {
    const rolled = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    this.history?.push("Wisdom Roll: " + (rolled + -1) + ", " + rolled + " - 1");
    this.lastRoll = "Wisdom Roll: " + (rolled + -1) + ", " + rolled + " - 1";
    return rolled + this.mods[0];
  }

  rollInt() {
    const rolled = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    this.history?.push("Intelligence Roll: " + (rolled + 1) + ", " + rolled + " + 1");
    this.lastRoll = "Intelligence Roll: " + (rolled + 1) + ", " + rolled + " + 1";
    return rolled + this.mods[0];
  }

  rollCha() {
    const rolled = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    this.history?.push("Charisma Roll: " + (rolled + 5) + ", " + rolled + " + 5");
    this.lastRoll = "Charisma Roll: " + (rolled + 5) + ", " + rolled + " + 5";
    return rolled + this.mods[0];
  }

  


  ngOnInit(): void {
  }

}

/*

Lots to re-refactor here. Data should be grabbed from the db and should do proper math, not hardcoded equations.

*/
