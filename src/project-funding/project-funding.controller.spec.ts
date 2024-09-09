import { Test, TestingModule } from '@nestjs/testing';
import { ProjectFundingController } from './project-funding.controller';
import { ProjectFundingService } from './project-funding.service';

describe('ProjectFundingController', () => {
  let controller: ProjectFundingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectFundingController],
      providers: [ProjectFundingService],
    }).compile();

    controller = module.get<ProjectFundingController>(ProjectFundingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
