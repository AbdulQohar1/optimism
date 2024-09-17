import { Test, TestingModule } from '@nestjs/testing';
import { ProjectContributionLinksService } from './project_contribution_links.service';

describe('ProjectContributionLinksService', () => {
  let service: ProjectContributionLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectContributionLinksService],
    }).compile();

    service = module.get<ProjectContributionLinksService>(ProjectContributionLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
