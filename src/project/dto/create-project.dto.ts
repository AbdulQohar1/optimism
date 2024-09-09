export class CreateProjectDto {
  id: number;
  project_id: string;
  name: string | null;
  description: string | null;
  created_by: string;
  created_at: Date;
  total_fund: number | null;
  status: string | null;
  project_logo_image: Buffer | null;
  project_logo_name: string | null;
  project_banner_image: Buffer | null;
  website_url: string | null;
};
