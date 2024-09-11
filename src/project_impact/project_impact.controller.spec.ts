import { Test, TestingModule } from '@nestjs/testing';
import { ProjectImpactController } from './project_impact.controller';
import { ProjectImpactService } from './project_impact.service';

describe('ProjectImpactController', () => {
  let controller: ProjectImpactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectImpactController],
      providers: [ProjectImpactService],
    }).compile();

    controller = module.get<ProjectImpactController>(ProjectImpactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
