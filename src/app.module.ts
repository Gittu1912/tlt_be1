import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TltUserModule } from './tlt-user/tlt-user.module';import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { TltRmModule } from './tlt-rm/tlt-rm.module';
import { RmItemModule } from './rm-item/rm-item.module';
// import { TltRmModule } from './tlt-rm/tlt-rm.module';
// import { RmIssueModule } from './rm-issue/rm-issue.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI,{
      connectionName: 'tlt',
    }),
    TltUserModule,
    
    RmItemModule,
    
    // TltRmModule,
    
    // RmIssueModule],,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
