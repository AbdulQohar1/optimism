import { Module } from '@nestjs/common';
import { ProjectImpactService } from './project_impact.service';
import { ProjectImpactController } from './project_impact.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [
    ProjectImpactController, 
    ProjectImpactService,
    PrismaClient,
  ],
  exports: [ProjectImpactService],
})
export class ProjectImpactModule {}
