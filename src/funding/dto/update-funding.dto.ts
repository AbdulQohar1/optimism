import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateFundingDto } from './create-funding.dto';

export class UpdateFundingDto extends OmitType(CreateFundingDto, ['id']) {}
