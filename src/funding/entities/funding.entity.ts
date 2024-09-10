export class Funding {
  id: number;
  project_id: string;
  amount: number | null;
  funding_date: Date;
  funding_source: string;
  currency: string;
  created_at: Date;
}
