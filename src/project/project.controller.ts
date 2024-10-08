import { Injectable, Query } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PaginationDto } from './dto/pagination.dto';
import { PrismaClient, project } from '@prisma/client';

@Injectable()
export class CreateProject {
  constructor (private readonly prisma: PrismaClient) {}
}

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()   
  async createProject(@Body() createProjectDto: CreateProjectDto): Promise<project> {
    return this.projectService.createProject(createProjectDto);   

  }
  
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.projectService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.delete(+id);
  }
}
