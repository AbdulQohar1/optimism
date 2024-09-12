import {} from '@nestjs/mapped-types';

export class CreateFundingDto {
	id: number;
	project_id: number;
	amount: number | null;
	funding_source: string;
	funding_description: string;
	currency: string;
	created_at: Date
};