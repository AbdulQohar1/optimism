import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './project/project.module';
import { FundingModule } from './funding/funding.module';
import { ProjectContributionModule } from './project_contribution/project_contribution.module';
import { ProjectImpactModule } from './project_impact/project_impact.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), ProjectModule,  FundingModule, ProjectContributionModule, ProjectImpactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
