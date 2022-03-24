import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './characters/character.module';

//Should use a environment variable for the mongo atlas connection string pass in any real project.

@Module({
  imports: [CharacterModule, MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.xs6oj.mongodb.net/nest-js-dnd?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
