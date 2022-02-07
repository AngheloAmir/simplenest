import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ItemsController } from './items/items.controller';
//import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module'
import { MongoDBAccessKey } from './env/keys';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot( MongoDBAccessKey )
  ],
  controllers: [
    AppController,
    //ItemsController this no need to be imported since it is included in the imports
  ],
  providers: [
    AppService,
    //ItemsService
  ],
})
export class AppModule {}
