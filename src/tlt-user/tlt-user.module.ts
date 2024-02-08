import { Module } from '@nestjs/common';
import { TltUserService } from './tlt-user.service';
import { TltUserController } from './tlt-user.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { TltUser, TltUserSchema } from './schema/tlt-user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name : TltUser.name , schema :TltUserSchema}],"tlt")

  ],
  controllers: [TltUserController],
  providers: [TltUserService],
})
export class TltUserModule {}
