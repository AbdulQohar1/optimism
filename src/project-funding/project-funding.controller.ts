import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectFundingService } from './project-funding.service';
import { CreateProjectFundingDto } from './dto/create-project-funding.dto';
import { UpdateProjectFundingDto } from './dto/update-project-funding.dto';
import { PrismaClient, projectFunding } from '@prisma/client';

// @Injectable()
// export class CreateProjectFunding {
//   constructor (private readonly prisma: PrismaClient) {}
// }

// @Controller('projects/:projectId/fundings')
// export class ProjectFundingController {
//   constructor(private readonly projectFundingService: ProjectFundingService) {}

@Controller('projects/:projectId/fundings')
export class ProjectFundingController {
    constructor(private readonly projectFundingService: ProjectFundingService, private readonly prisma: PrismaClient) {}
    
  @Post()
  async createProjectFunding(
    @Param('project_id') project_id: number,
    @Body() createProjectFundingDto: CreateProjectFundingDto
): Promise<projectFunding> {
    const projectFunding = await this.prisma.projectFunding.create({
        data: {
            ...createProjectFundingDto,
            project_id,
        },
    });
    return projectFunding;
}

  // @Get()
  // findAll() {
  //   return this.projectFundingService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.projectFundingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProjectFundingDto: UpdateProjectFundingDto) {
  //   return this.projectFundingService.update(+id, updateProjectFundingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.projectFundingService.remove(+id);
  // }
}
