export interface Character {
    name: String;
    charClass: String;
    level: Number;
    background: String;
    imageUrl: String;
    strength: Number;
    dexterity: Number;
    constitution: Number;
    wisdom: Number;
    intelligence: Number;
    charisma: Number;
  }

export const CHARS: Character[] = [
  {
    "name": "Fjord",
    "charClass": "Warlock",
    "level": 16,
    "background": "Urchin",
    "imageUrl": "https://preview.redd.it/bysly33hok881.jpg?auto=webp&s=4cf3d584a1695f7f57cba8300d5ae7ef9ba113f8",
    "strength": 16,
    "dexterity": 11,
    "constitution": 18,
    "wisdom": 9,
    "intelligence": 12,
    "charisma": 20 
  },
  {
  "name": "Beau",
  "charClass": "Monk",
  "level": 16,
  "background": "Cobolt Soul Agent",
  "imageUrl": "https://preview.redd.it/bysly33hok881.jpg?auto=webp&s=4cf3d584a1695f7f57cba8300d5ae7ef9ba113f8",
  "strength": 10,
  "dexterity": 20,
  "constitution": 16,
  "wisdom": 20,
  "intelligence": 19,
  "charisma": 8 
  },
  {
    "name": "Caleb",
    "charClass": "Wizard",
    "level": 16,
    "background": "Criminal",
    "imageUrl": "https://preview.redd.it/bysly33hok881.jpg?auto=webp&s=4cf3d584a1695f7f57cba8300d5ae7ef9ba113f8",
    "strength": 10,
    "dexterity": 16,
    "constitution": 14,
    "wisdom": 14,
    "intelligence": 20,
    "charisma": 16 
    },
    {
      "name": "Yasha",
      "charClass": "Barbarian",
      "level": 20,
      "background": "Noble",
      "imageUrl": "https://preview.redd.it/bysly33hok881.jpg?auto=webp&s=4cf3d584a1695f7f57cba8300d5ae7ef9ba113f8",
      "strength": 24,
      "dexterity": 18,
      "constitution": 24,
      "wisdom": 16,
      "intelligence": 12,
      "charisma": 18 
      }
]