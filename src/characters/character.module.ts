import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CharacterSchema } from "./character.model";

import { CharactersService } from "./character.service";
import { CharactersController } from "./characters.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: 'character', schema: CharacterSchema}])],
    controllers: [CharactersController],
    providers: [CharactersService]
})

export class CharacterModule {}
