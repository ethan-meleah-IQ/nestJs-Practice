import { Body, Controller, Get, Post, Param, Delete } from "@nestjs/common";
import { title } from "process";
import { CharactersService } from "./character.service";

@Controller('characters')
export class CharactersController {
    constructor(private readonly characterService: CharactersService) {}

    @Post()
    async addCharacter(
        @Body('name') charName: String,
        @Body('charClass') charClass: String,
        @Body('level') charLevel: Number,
        @Body('background') charBackground: String,
        @Body('imageUrl') charImageUrl: String,
        @Body('strength') charStr: Number,
        @Body('dexterity') charDex: Number,
        @Body('constitution') charCon: Number,
        @Body('wisdom') charWis: Number,
        @Body('intelligence') charInt: Number,
        @Body('charisma') charCha: Number 
     ) {
        const generatedId = await this.characterService.addCharacter(charName, charClass, charLevel, charBackground, charImageUrl, charStr, charDex, charCon, charWis, charInt, charCha); 

        return { id: generatedId }
    }

    @Get()
    async getAllCharacters() {
        const characters = await this.characterService.getAllCharacters();
        return characters;
    }

    @Get(':name')
    async getSingleCharacter(@Param('name') characterName: String) {
        const characters =  this.characterService.getSingleCharacter(characterName);
        return characters;
    }

    @Delete(':id')
    async removeCharacter(@Param('id') characterId: string ) {
        await this.characterService.deleteCharacter(characterId);
        return null;
    }
}