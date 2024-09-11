import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectContributionDto } from './dto/create-project_contribution.dto';
import { UpdateProjectContributionDto } from './dto/update-project_contribution.dto';
import { PrismaClient, project_contribution } from '@prisma/client';

@Injectable()
export class ProjectContributionService {
  constructor(private readonly prisma: PrismaClient) {}

  // create project contribution
  async createProjectContribution(
    project_id: number,
    createProjectContributionDto: CreateProjectContributionDto
  ): Promise<project_contribution> {

    const newContribution = await this.prisma.project_contribution.create({
      data: {
        ...createProjectContributionDto,
        project_id
      },
    });

    return newContribution;
  }

  // get all contributions
  async findAll() :Promise<project_contribution[]>{
    return this.prisma.project_contribution.findMany();
  }

  // find a project's contribution by id
  async findOne(id: number) :Promise<project_contribution>{
    // fetch contributuion from db
    const contribution = await this.prisma.project_contribution.findUnique({
      where: {id: id}
    });

    return contribution;
  }

  // update an existening project_contribution
  async update(id: number, updateProjectContributionDto: UpdateProjectContributionDto) :Promise<project_contribution> {
    const existingContribution = await this.findOne(id);

    if(!existingContribution) {
      throw new NotFoundException(`Contribution with the provided id ${id} not found...`)
    };

    const updatedContribution = await this.prisma.project_contribution.update({
      where: {id: id},
      data: updateProjectContributionDto,
    });

    return updatedContribution
  }

  // delete a project's contribution with :id
  async remove(id: number) :Promise<project_contribution> {
    try {
      const deletedContribution = await this.prisma.project_contribution.delete({
        where: {id: id}
      });

      return deletedContribution;
    } catch (error) {
      
      throw new NotFoundException(`Contribution with the provided id ${id} not found...`)
    }
  }
}
