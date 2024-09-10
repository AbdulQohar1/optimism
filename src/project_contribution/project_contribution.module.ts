import { Module } from '@nestjs/common';
import { ProjectContributionService } from './project_contribution.service';
import { ProjectContributionController } from './project_contribution.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [
    ProjectContributionController, ProjectContributionService,
    PrismaClient
  ],
  exports: [ProjectContributionService],
})
export class ProjectContributionModule {}
