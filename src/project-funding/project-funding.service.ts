import { Injectable, NotFoundException } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProjectFundingDto } from './dto/create-project-funding.dto';
import { UpdateProjectFundingDto } from './dto/update-project-funding.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProjectFundingService {
  constructor(private readonly prisma: PrismaClient) {};

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


  findAll() {
    return `This action returns all projectFunding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectFunding`;
  }

  update(id: number, updateProjectFundingDto: UpdateProjectFundingDto) {
    return `This action updates a #${id} projectFunding`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectFunding`;
  }
}
