export class CreateFundingDto {
    id: number;
    project_id: string;
    amount: number | null;
    funding_source: string;
    funding_description: string;
    currency: string;
    created_at: Date
};