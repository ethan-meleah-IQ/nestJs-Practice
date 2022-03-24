import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Character } from "./character.model";
import mongoose from "mongoose";

@Injectable()
export class CharactersService {

    constructor(@InjectModel('character') private readonly characterModel) {

    }
    
    private characters: Character[] = [];

    async addCharacter(
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
    ) {
        const newCharacter = new this.characterModel({
            name,
            charClass,
            level,
            background,
            imageUrl,
            strength,
            dexterity,
            constitution,
            wisdom,
            intelligence,
            charisma
        })
        const result = await newCharacter.save();
        return result.id as string;
    }

    async getAllCharacters() {
        const characterArray = await this.characterModel.find();
        return characterArray as Character[];
    }

    async getSingleCharacter(id: String): Promise<Character> {
        const character = await this.characterModel.findById(id);
        if (!character) {
            throw new NotFoundException('Could not find character.');
        }
        return character;
    }

    async deleteCharacter(charId: string) {
        await this.characterModel.deleteOne({id: charId});
        return null;
        }
}