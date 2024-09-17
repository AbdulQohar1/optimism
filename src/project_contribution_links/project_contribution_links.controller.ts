import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectContributionLinksService } from './project_contribution_links.service';
import { CreateProjectContributionLinkDto } from './dto/create-project_contribution_link.dto';
import { UpdateProjectContributionLinkDto } from './dto/update-project_contribution_link.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CreateProject {
  constructor (private readonly prisma: PrismaClient) {}
}

@Controller('project/:project_contribution_id/project_contribution_links') //need to check this later
export class ProjectContributionLinksController {
  constructor(private readonly projectContributionLinksService: ProjectContributionLinksService) {}

  @Post()
  async createProjectContributionLinks(
    @Param('project_contribution_id') project_contribution_id: number,
    @Body() createProjectContributionLinkDto: CreateProjectContributionLinkDto) {

    return this.projectContributionLinksService.createProjectContributionLinks( 
      project_contribution_id,
      createProjectContributionLinkDto);
  }

  @Get()
  findAll() {
    return this.projectContributionLinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectContributionLinksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjectContributionLinkDto: UpdateProjectContributionLinkDto) {
    return this.projectContributionLinksService.update(+id, updateProjectContributionLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectContributionLinksService.remove(+id);
  }
}
