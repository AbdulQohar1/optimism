import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectContributionLinkDto } from './create-project_contribution_link.dto';

export class UpdateProjectContributionLinkDto extends PartialType(CreateProjectContributionLinkDto) {}
