import { Module } from '@nestjs/common';
import { FundingService } from './funding.service';
import { FundingController } from './funding.controller';
import { PrismaClient  } from '@prisma/client';

@Module({
  providers: [FundingController, FundingService,  PrismaClient],
  exports: [FundingService],
})
export class FundingModule {}
