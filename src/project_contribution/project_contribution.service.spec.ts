import { Test, TestingModule } from '@nestjs/testing';
import { ProjectContributionService } from './project_contribution.service';

describe('ProjectContributionService', () => {
  let service: ProjectContributionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectContributionService],
    }).compile();

    service = module.get<ProjectContributionService>(ProjectContributionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
