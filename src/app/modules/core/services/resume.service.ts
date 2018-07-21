import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ApiRoute} from '../utils/utils';
import {Observable} from 'rxjs/Observable';
import {Contact, Resume} from '../models/resume';
import {Education} from '../models/education';
import {EmploymentHistory} from '../models/employment-history';
import {Language} from '../models/language';
import {Skill} from '../models/skill';
import {Refrence} from '../models/refrence';
import {AwarsAchivement} from '../models/awars-achivement';
import {Interest} from '../models/interest';
import {IndustrialExposure} from '../models/industrial-exposure';
import {ProjectDetail} from '../models/project-detail';
import {Strength} from '../models/strength';
import {Weakness} from '../models/weakness';
import {Objective} from '../models/objective';

@Injectable()
export class ResumeService {
  constructor(private apiService: ApiService) {
  }

  // data adding API

  addResume(data: { name: string }): Observable<Resume> {
    return this.apiService.post(ApiRoute.RESUME + '/add/resume', data).map(res => <Resume>res);
  }

  addContactDetails(data: {
    image_url: string, video_url: string, first_name: string, last_name: string,
    phone_number: number, email: string, address: string, city: string, state: string,
    zip_code: number, country: string, summary: string
  }, resumeId: string): Observable<Contact> {
    return this.apiService.post(ApiRoute.RESUME + '/add/contactDetails/' + resumeId, data).map(res => <Contact>res);
  }

  addEducation(data: {
    school_name: string, city: string, state: string, field: string,
    degree_type: string, graduation_month: number, graduation_year: number, percentage: string
  }, resumeId: string): Observable<Education> {
    return this.apiService.post(ApiRoute.RESUME + '/add/education/' + resumeId, data).map(res => <Education>res);
  }

  addEmploymentHistory(data: {
    employer: string, designation: string, city: string, state: string,
    start_month: string, start_year: string, end_month: string, end_year: string
  }, resumeId: string): Observable<EmploymentHistory> {
    return this.apiService.post(ApiRoute.RESUME + '/add/employmentHistory/' + resumeId, data).map(res => <EmploymentHistory>res);
  }

  addLanguage(data: { name: string, level: string, represent: string }, resumeId): Observable<Language> {
    return this.apiService.post(ApiRoute.RESUME + '/add/language/' + resumeId, data).map(res => <Language>res);
  }

  addSkill(data: { skill: string, level: string, represent: string }, resumeId): Observable<Skill> {
    return this.apiService.post(ApiRoute.RESUME + '/add/skill/' + resumeId, data).map(res => <Skill>res);
  }

  addRefrence(data: {
    name: string, relationship: string, company: string, email: string,
    phone: number, address: string
  }, resumeId: string): Observable<Refrence> {
    return this.apiService.post(ApiRoute.RESUME + '/add/refrence/' + resumeId, data).map(res => <Refrence>res);
  }

  addAward(data: { awards_and_achivements: string }, resumeId: string): Observable<AwarsAchivement> {
    return this.apiService.post(ApiRoute.RESUME + '/add/refrence/' + resumeId, data).map(res => <AwarsAchivement>res);
  }

  addInterest(data: { interest: string }, resumeId: string): Observable<Interest> {
    return this.apiService.post(ApiRoute.RESUME + '/add/interest/' + resumeId, data).map(res => <Interest>res);
  }

  addIndustrialExposure(data: {
    organisation: string, city: string, state: string,
    start_month: number, start_year: number, end_month: number, end_year: number,
    work: string
  }, resumeId: string): Observable<IndustrialExposure> {
    return this.apiService.post(ApiRoute.RESUME + '/add/industrialExposure/' + resumeId, data).map(res => <IndustrialExposure>res);
  }

  addProjectDetails(data: {
    title: string, description: string,
    role: string, duration: string
  }, resumeId: string): Observable<ProjectDetail> {
    return this.apiService.post(ApiRoute.RESUME + '/add/projectDetail/' + resumeId, data).map(res => <ProjectDetail>res);
  }

  addStrength(data: { name: string }, resumeId: string): Observable<Strength> {
    return this.apiService.post(ApiRoute.RESUME + '/add/strength/' + resumeId, data).map(res => <Strength>res);
  }

  addWeakness(data: { name: string }, resumeId: string): Observable<Weakness> {
    return this.apiService.post(ApiRoute.RESUME + '/add/weakness/' + resumeId, data).map(res => <Weakness>res);
  }

  addObjective(data: { objective: string, date: number, place: string, declaration: string }, resumeId: string): Observable<Objective> {
    return this.apiService.post(ApiRoute.RESUME + '/add/objective/' + resumeId, data).map(res => <Objective>res);
  }

  addImage(imageUrl, contactDetailId: string): Observable<Contact> {
    const formData: FormData = new FormData();
    formData.append('profile_image', imageUrl);
    return this.apiService.post(ApiRoute.RESUME + '/add/objective/' + contactDetailId, formData).map(res => <Contact>res);
  }

  // Get dataApi
  getAllResumes(): Observable<Resume[]> {
    return this.apiService.get(ApiRoute.RESUME + '/all').map(res => <Resume[]>res);
  }

  getResumes(resumeId): Observable<Resume> {
    return this.apiService.get(ApiRoute.RESUME + '/' + resumeId).map(res => <Resume>res);
  }
}
