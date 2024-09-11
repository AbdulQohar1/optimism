import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectImpactDto } from './dto/create-project_impact.dto';
import { UpdateProjectImpactDto } from './dto/update-project_impact.dto';
import { PrismaClient, project_impact } from '@prisma/client';

@Injectable()
export class ProjectImpactService {
  constructor (private readonly prisma: PrismaClient) {}

//  create project impact
  async createImpact(
    project_id: number,
    createProjectImpactDto: CreateProjectImpactDto) :Promise<project_impact> {

      const newImpact = await this.prisma.project_impact.create({
        data: {
          ...CreateProjectImpactDto,
          project_id
        },
      })
      return newImpact;
  }

  // get all impacts
  async findAll() :Promise<project_impact[]>{
    return this.prisma.project_impact.findMany();
  }

  // find an impact by id
  async findOne(id: number) :Promise<project_impact>{
    // fetch impact fromm db
    const impact = await this.prisma.project_impact.findUnique({
      where: {id: id}
    });

    return impact;
  }

  update(id: number, updateProjectImpactDto: UpdateProjectImpactDto) {
    return `This action updates a #${id} projectImpact`;
  }

  // delete a project's impact with :id
  async remove(id: number) :Promise<project_impact> {
    try {
      const deletedImpact = await this.prisma.project_impact.delete({
        where: {id: id}
      });

      return deletedImpact;

    } catch (error) {
      throw new NotFoundException(`Impact with the provide id ${id} not found...`)
    }
  }
}
