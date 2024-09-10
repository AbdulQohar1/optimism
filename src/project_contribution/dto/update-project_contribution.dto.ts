import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectContributionDto } from './create-project_contribution.dto';

export class UpdateProjectContributionDto extends PartialType(CreateProjectContributionDto) {}
