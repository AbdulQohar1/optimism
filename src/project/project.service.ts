import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaClient, project} from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaClient) {}

  // create a new project
  async createProject(createProjectDto: CreateProjectDto): Promise <project> {

    const Project = await this.prisma.project.create(
      {
        data: {
          ...createProjectDto,
        },
      }
    )
    
    return Project;
  }

  // get all projects
  async findAll(): Promise<project[]> {
    return this.prisma.project.findMany();
  }

  // find a project by  id 
  async findOne(id: number): Promise< project> {
  // fetch the project from the db
    const Project = await this.prisma.project.findUnique({ where: {id: id} });
  
    // check if the project was found
    if (!Project) {
      throw new NotFoundException(`Project with the id ${id} not found...`)
    }

    // return the project if found successfully 
    return Project
  }

  // update a pre-existing project
  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<project> {
    const existingProject = await this.findOne(id);

    // Throw an exception error if project with the provided id isn't found 
    if (!existingProject) {
      throw new NotFoundException(`Project with the provided id ${id} not found...`)
    };

    // Update the project
    const updatedProject = await this.prisma.project.update({
      where: {id: id},
      data: updateProjectDto,
    });

    return updatedProject;
  }

  // deleting a project by id
  async delete(id: number): Promise<project> {
    try {
      const deletedProject = await this.prisma.project.delete({where: {id: id}});

      return deletedProject;
    } catch (error) {
      throw new NotFoundException(`Project with the provided id ${id} not found...`)
    } 
  }
}

