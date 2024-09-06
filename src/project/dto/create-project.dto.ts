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




// import { Injectable } from "@nestjs/common";
// import { PrismaClient, project } from "@prisma/client";

// @Injectable() 

// export class CreateProjectDto {
// 	constructor (private readonly prisma: PrismaClient) {}

// 	async createProject( data: {
// 		id: number;
//     project_id: string;
//     name: string | null;
//     description: string | null;
//     created_by: string;
//     created_at: Date;
//     total_fund: number | null;
//     status: string | null;
//     project_logo_image: Buffer | null;
//     project_logo_name: string | null;
//     project_banner_image: Buffer | null;
//     website_url: string | null;
// 	}): Promise< project> {
// 		const project = await this.prisma.project.create({
// 			data,
// 		});
// 		return project
// 	};
// }


// description TEXT,
//   created_by VARCHAR(255) NOT NULL,
//   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   total_fund INTEGER DEFAULT 0,
//   status VARCHAR(50),
//   project_logo_image BYTEA, 
//   project_logo_name  VARCHAR(120),
//   project_banner_image BYTEA,  
//   website_url VARCHAR(255) 
// // 