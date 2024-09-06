import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [ProjectService, PrismaClient, ProjectController],
  exports: [ProjectService],

})
export class ProjectModule {}
