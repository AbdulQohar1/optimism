export class CreateProjectFundingDto {
  id: number;
  project_id: string;
  amount: string;
  funding_source: string;
  funding_description: string;
  currency: string;
  created_at: Date;
}
