import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectFundingDto } from './create-project-funding.dto';

export class UpdateProjectFundingDto extends PartialType(CreateProjectFundingDto) {}
