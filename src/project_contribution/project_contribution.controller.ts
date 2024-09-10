import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectContributionService } from './project_contribution.service';
import { CreateProjectContributionDto } from './dto/create-project_contribution.dto';
import { UpdateProjectContributionDto } from './dto/update-project_contribution.dto';
import { PrismaClient, project_contribution } from '@prisma/client';

@Injectable()
export class CreateProject {
  constructor (private readonly prisma: PrismaClient) {}
}

@Controller('project/:project_id/project_contribution')
export class ProjectContributionController {
  constructor(private readonly projectContributionService: ProjectContributionService) {}
  
  @Post()
  async createProjectContribution(
    @Param('project_id') project_id: number,
    @Body() createProjectContributionDto: CreateProjectContributionDto) {

    return this.projectContributionService.createProjectContribution(
      project_id, 
      createProjectContributionDto
    );
  }

  @Get()
  findAll() {
    return this.projectContributionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectContributionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectContributionDto: UpdateProjectContributionDto) {
    return this.projectContributionService.update(+id, updateProjectContributionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectContributionService.remove(+id);
  }
}
