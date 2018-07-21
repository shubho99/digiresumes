import {Education} from './education';
import {EmploymentHistory} from './employment-history';
import {Skill} from './skill';
import {Language} from './language';
import {Refrence} from './refrence';
import {AwarsAchivement} from './awars-achivement';
import {Interest} from './interest';
import {IndustrialExposure} from './industrial-exposure';
import {ProjectDetail} from './project-detail';
import {Strength} from './strength';
import {Weakness} from './weakness';
import {Objective} from './objective';

export interface Resume {
  name: string;
  contact_details: Contact;
  education: Education[];
  employment_history: EmploymentHistory[];
  skills: Skill[];
  languages: Language[];
  refrences: Refrence[];
  award_achivements: AwarsAchivement[];
  interests: Interest[];
  industrialExposures: IndustrialExposure[];
  projectDetails: ProjectDetail[];
  strengths: Strength[];
  weakness: Weakness[];
  objectives: Objective[];
}

export  interface Contact {
  image_url: string;
  video_url: string;
  first_name: string;
  last_name: string;
  phone_number: number;
  email: string;
  address: string;
  city: string;
  state: string;
  zip_code: number;
  country: string;
  summary: string;
}
