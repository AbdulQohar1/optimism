import { Module } from '@nestjs/common';
import { ProjectFundingService } from './project-funding.service';
import { ProjectFundingController } from './project-funding.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [
    ProjectFundingService, 
    PrismaClient,
    ProjectFundingController  
  ],
  exports: [ProjectFundingService]
})

export class ProjectFundingModule {}
