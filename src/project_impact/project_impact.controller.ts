import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectImpactService } from './project_impact.service';
import { CreateProjectImpactDto } from './dto/create-project_impact.dto';
import { UpdateProjectImpactDto } from './dto/update-project_impact.dto';
import { PrismaClient, project_impact } from '@prisma/client';

@Injectable()
export class CreateImpact {
  constructor (private readonly prisma: PrismaClient) {}
}

@Controller('project/:project_id/project-impact')
export class ProjectImpactController {
  constructor(private readonly projectImpactService: ProjectImpactService) {}

  @Post()
  async createImpact(
    @Param('project_id') project_id: number,
    @Body() createProjectImpactDto: CreateProjectImpactDto) {

    return this.projectImpactService.createImpact(
      project_id,
      createProjectImpactDto
    );
  }

  @Get()
  findAll() {
    return this.projectImpactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectImpactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectImpactDto: UpdateProjectImpactDto) {
    return this.projectImpactService.update(+id, updateProjectImpactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectImpactService.remove(+id);
  }
}
