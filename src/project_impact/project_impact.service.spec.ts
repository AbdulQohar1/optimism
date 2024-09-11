import { Test, TestingModule } from '@nestjs/testing';
import { ProjectImpactService } from './project_impact.service';

describe('ProjectImpactService', () => {
  let service: ProjectImpactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectImpactService],
    }).compile();

    service = module.get<ProjectImpactService>(ProjectImpactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
