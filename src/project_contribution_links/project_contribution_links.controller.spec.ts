import { Test, TestingModule } from '@nestjs/testing';
import { ProjectContributionLinksController } from './project_contribution_links.controller';
import { ProjectContributionLinksService } from './project_contribution_links.service';

describe('ProjectContributionLinksController', () => {
  let controller: ProjectContributionLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectContributionLinksController],
      providers: [ProjectContributionLinksService],
    }).compile();

    controller = module.get<ProjectContributionLinksController>(ProjectContributionLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
