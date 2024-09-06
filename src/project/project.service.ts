import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaClient, project} from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaClient) {}

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

  // findAll() {
  //   return `This action returns all project`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} project`;
  // }

  // update(id: number, updateProjectDto: UpdateProjectDto) {
  //   return `This action updates a #${id} project`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} project`;
  // }
}

