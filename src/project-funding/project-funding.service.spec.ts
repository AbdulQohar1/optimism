import { Test, TestingModule } from '@nestjs/testing';
import { ProjectFundingService } from './project-funding.service';

describe('ProjectFundingService', () => {
  let service: ProjectFundingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectFundingService],
    }).compile();

    service = module.get<ProjectFundingService>(ProjectFundingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
