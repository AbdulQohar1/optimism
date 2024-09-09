import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './project/project.module';
import { ProjectFundingModule } from './project-funding/project-funding.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), ProjectModule, ProjectFundingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
