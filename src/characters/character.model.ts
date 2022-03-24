import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
    name: {type: String, required: true},
    charClass: {type: String, required: true},
    level: {type: Number, required: true},
    background: {type: String, required: false},
    imageUrl: {type: String, required: true},
    strength: {type: Number, required: true},
    dexterity: {type: Number, required: true},
    constitution: {type: Number, required: true},
    wisdom: {type: Number, required: true},
    intelligence: {type: Number, required: true},
    charisma: {type: Number, required: true}
})

export interface Character extends mongoose.Document {
    id: String,
    name: String,
    charClass: String,
    level: Number,
    background: String,
    imageUrl: String,
    strength: Number,
    dexterity: Number,
    constitution: Number,
    wisdom: Number,
    intelligence: Number,
    charisma: Number
  }