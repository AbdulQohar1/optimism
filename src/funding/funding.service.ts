import { Injectable, NotFoundException } from '@nestjs/common';
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

// get all funding 
  async findAll(): Promise<funding[]> {
    
    return this.prisma.funding.findMany();
  }

  // find a project's funding by id
  async findOne(id: number): Promise<funding> {
    // fetch the particular fund from the db 
    const fund = await this.prisma.funding.findUnique({
      where: {id: id}});

    // check if the fund is found
    if (!fund) {
      throw new NotFoundException(`Funding with the id ${id} not found...`)
    }
    
    // return the funding if found successfully.
    return fund
  }

  // update an existening project_funding
  // async update(id: number, updateFundingDto: UpdateFundingDto): Promise<funding> {
  //   const existingFunding = await this.findOne(id);

  //   if (!existingFunding) {
  //     throw new NotFoundException(`Fund with the provided id ${id} not found...`);
  //   }

  //   const updatedData: UpdateFundingDto = {
  //     // id: updateFundingDto.id,
  //     // id: existingFunding.id,
  //     project_id: updateFundingDto.project_id,
  //     amount: updateFundingDto.amount,
  //     funding_source: updateFundingDto.funding_source,
  //     funding_description: updateFundingDto.funding_description,
  //     currency: updateFundingDto.currency,
  //     created_at: Date,
  //   };

  //   const updateFunding = await this.prisma.funding.update({
  //     where: { id: id },
  //     data: updatedData,
  //   });

  //   return updateFunding;
  // }
  async update(id: number, updateFundingDto: UpdateFundingDto): Promise<funding> {
    const existingFunding = await this.findOne(id);

    // Throw an exception error if funding with the provided id isn't found 
    if (!existingFunding) {
      throw new NotFoundException(`Fund with the provided id ${id} not found...`)
    };

    // update the funding if found
    const updatedFunding = await this.prisma.funding.update({
      where: {id: id},
      data: updateFundingDto ,
    });

    // return `This action updates a #${id} funding`;
    return updatedFunding;
  }

  // delete a project funding
  async remove(id: number): Promise<funding> {
    try {
      const deletedFunding = await this.prisma.funding.delete({
        where: {id: id}
      });

      return deletedFunding;
    } catch (error) {
      throw new NotFoundException(`Project fund with the provide id ${id} not found...`)
    }
  }
}
