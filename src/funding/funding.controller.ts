import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FundingService } from './funding.service';
import { CreateFundingDto } from './dto/create-funding.dto';
import { UpdateFundingDto } from './dto/update-funding.dto';
import { PrismaClient, project, funding } from '@prisma/client';

@Injectable()
export class CreateProject {
  constructor (private readonly prisma: PrismaClient) {}
}

@Controller('project/:project_id/funding')
export class FundingController {
  constructor(private readonly fundingService: FundingService) {}

  @Post()
  async createFunding(
    @Param('project_id') project_id: number,
    @Body() createFundingDto: CreateFundingDto
  ) {
    return this.fundingService.createFunding(
      project_id, 
      createFundingDto
    );
  }

  @Get()
  findAll() {
    return this.fundingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFundingDto: UpdateFundingDto) {
    return this.fundingService.update(+id, updateFundingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundingService.remove(+id);
  }
}
