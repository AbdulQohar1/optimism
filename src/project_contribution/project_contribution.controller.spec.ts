import { Test, TestingModule } from '@nestjs/testing';
import { ProjectContributionController } from './project_contribution.controller';
import { ProjectContributionService } from './project_contribution.service';

describe('ProjectContributionController', () => {
  let controller: ProjectContributionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectContributionController],
      providers: [ProjectContributionService],
    }).compile();

    controller = module.get<ProjectContributionController>(ProjectContributionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
