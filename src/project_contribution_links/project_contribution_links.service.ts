import { Injectable } from '@nestjs/common';
import { CreateProjectContributionLinkDto } from './dto/create-project_contribution_link.dto';
import { UpdateProjectContributionLinkDto } from './dto/update-project_contribution_link.dto';
import { PrismaClient, project_contribution_links } from '@prisma/client';

@Injectable()
export class ProjectContributionLinksService {
  constructor(  private readonly prisma: PrismaClient) {}
  
  // create new project-contribution-links 
  async createProjectContributionLinks( 
    project_contribution_id: number,
    createProjectContributionLinkDto: CreateProjectContributionLinkDto) :Promise<project_contribution_links>{
    return 'This action adds a new projectContributionLink';
  }

  findAll() {
    return `This action returns all projectContributionLinks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectContributionLink`;
  }

  update(id: number, updateProjectContributionLinkDto: UpdateProjectContributionLinkDto) {
    return `This action updates a #${id} projectContributionLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectContributionLink`;
  }
}
