import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectFundingDto } from './dto/create-project-funding.dto';
import { UpdateProjectFundingDto } from './dto/update-project-funding.dto';
import { PrismaClient, project ,ProjectFunding } from '@prisma/client';
// import {  Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { ProjectFunding } from './entities/project-funding.entity';

@Injectable()
export class ProjectFundingService {
  constructor(private readonly prisma: PrismaClient) {};

  async createProjectFunding(
    projectId: number,
    createProjectFundingDto: Prisma.projectFundingCreateInput
): Promise<Prisma.projectFunding> {
    const projectFunding = await this.prisma.projectFunding.create({
        data: {
            ...createProjectFundingDto,
            projectId,
        },
    });
    return projectFunding;
}
  // create project funding 
  // async createProjectFunding( createProjectFundingDto: CreateProjectFundingDto): Promise <projectFunding> {

  //   const ProjectFunding = await this.prisma.projectFunding.create({
  //     data: {
  //       ...createProjectFundingDto,
  //       project_id
  //     }
  //   })

  //   return ProjectFunding
  // }


  // findAll() {
  //   return `This action returns all projectFunding`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} projectFunding`;
  // }

  // update(id: number, updateProjectFundingDto: UpdateProjectFundingDto) {
  //   return `This action updates a #${id} projectFunding`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} projectFunding`;
  // }
}
