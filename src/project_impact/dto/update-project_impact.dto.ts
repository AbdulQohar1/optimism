import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectImpactDto } from './create-project_impact.dto';

export class UpdateProjectImpactDto extends PartialType(CreateProjectImpactDto) {}
