// import { Injectable } from '@nestjs/common';
// import { CreateFundingDto } from './dto/create-funding.dto';
// import { UpdateFundingDto } from './dto/update-funding.dto';
// import { Funding, PrismaClient, Project } from '@prisma/client';

// @Injectable()
// export class FundingService {
//   constructor(private readonly prisma: PrismaClient) {}

//   // create project funding
//   async createFunding(
//     project_id: number,
//     createFundingDto: CreateFundingDto
//   ): Promise<Funding> {
//     const funding = await this.prisma.funding.create({
//       data: {
//         ...createFundingDto,
//         project_id,
//       },
//     });

//     return funding;
//   }  
  // create(createFundingDto: CreateFundingDto) {
  //   return 'This action adds a new funding';
  // }

  import { Injectable } from '@nestjs/common';
import { CreateFundingDto } from './dto/create-funding.dto';
import { UpdateFundingDto } from './dto/update-funding.dto';
import { PrismaClient, project, funding } from '@prisma/client';

@Injectable()
export class FundingService {
  constructor(private readonly prisma: PrismaClient) {}

  // create project funding
  async createFunding(
    project_id: number,
    createFundingDto: CreateFundingDto
  ): Promise<funding> {
    const newFunding = await this.prisma.funding.create({
      data: {
        ...createFundingDto,
        project_id,
      },
    });

    return newFunding;
  }



  findAll() {
    return `This action returns all funding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funding`;
  }

  update(id: number, updateFundingDto: UpdateFundingDto) {
    return `This action updates a #${id} funding`;
  }

  remove(id: number) {
    return `This action removes a #${id} funding`;
  }
}
