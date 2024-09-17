import { Module } from '@nestjs/common';
import { ProjectContributionLinksService } from './project_contribution_links.service';
import { ProjectContributionLinksController } from './project_contribution_links.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [
    ProjectContributionLinksController,
    ProjectContributionLinksService,
    PrismaClient,
  ],
  exports: [ProjectContributionLinksService],
})
export class ProjectContributionLinksModule {}
