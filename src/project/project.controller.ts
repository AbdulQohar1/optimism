import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Injectable } from '@nestjs/common';
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
  // @Post()
  // async createProject (@Body() 
  // data: {
  //   id: number;
  //   project_id: string;
  //   name: string | null;
  //   description: string | null;
  //   created_by: string;
  //   created_at: Date;
  //   total_fund: number | null;
  //   status: string | null;
  //   project_logo_image: Buffer | null;
  //   project_logo_name: string | null;
  //   project_banner_image: Buffer | null;
  //   website_url: string | null;
  // }): Promise <project> {
  //   return this.projectService.createProject(data);
  // }
  // }
  // create(@Body() createProjectDto: CreateProjectDto) {
  //   return this.projectService.create(createProjectDto);
  // }

  // @Get()
  // findAll() {
  //   return this.projectService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.projectService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
  //   return this.projectService.update(+id, updateProjectDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.projectService.remove(+id);
  // }
}
