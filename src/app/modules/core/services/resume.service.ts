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

  addOrUpdateImage(imageUrl, contactDetailId: string): Observable<Contact> {
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

  // Update Api
  updateResume(data, resumeId: string): Observable<Resume> {
    return this.apiService.get(ApiRoute.RESUME + '/update/resume/' + resumeId).map(res => <Resume>res);
  }

  updateContactDetails(data, contactDetailId: string): Observable<Contact> {
    return this.apiService.get(ApiRoute.RESUME + '/update/contactDetails/' + contactDetailId).map(res => <Contact>res);
  }

  updateEducation(data, educationId: string): Observable<Education> {
    return this.apiService.get(ApiRoute.RESUME + '/update/education/' + educationId).map(res => <Education>res);
  }

  updateEmploymentHistory(data, employmentHistoryId: string): Observable<EmploymentHistory> {
    return this.apiService.get(ApiRoute.RESUME + '/update/employmentHistory/' + employmentHistoryId).map(res => <EmploymentHistory>res);
  }

  updateLanguage(data, languageId: string): Observable<Language> {
    return this.apiService.get(ApiRoute.RESUME + '/update/language/' + languageId).map(res => <Language>res);
  }

  updateSkill(data, skillId: string): Observable<Skill> {
    return this.apiService.get(ApiRoute.RESUME + '/update/skill/' + skillId).map(res => <Skill>res);
  }

  updateRefrence(data, refrenceId: string): Observable<Refrence> {
    return this.apiService.get(ApiRoute.RESUME + '/update/refrence/' + refrenceId).map(res => <Refrence>res);
  }

  updateAwardAchivement(data, awardAchivementId: string): Observable<AwarsAchivement> {
    return this.apiService.get(ApiRoute.RESUME + '/update/awardAchivements/' + awardAchivementId).map(res => <AwarsAchivement>res);
  }

  updateInterest(data, interestId: string): Observable<Interest> {
    return this.apiService.get(ApiRoute.RESUME + '/update/interest/' + interestId).map(res => <Interest>res);
  }

  updateIndustrialExposure(data, industrialExposureId: string): Observable<IndustrialExposure> {
    return this.apiService.get(ApiRoute.RESUME + '/update/industrialExposure/' + industrialExposureId).map(res => <IndustrialExposure>res);
  }

  updateProjectDetail(data, projectDetailId: string): Observable<ProjectDetail> {
    return this.apiService.get(ApiRoute.RESUME + '/update/projectDetail/' + projectDetailId).map(res => <ProjectDetail>res);
  }

  updateStrength(data, strengthId: string): Observable<Strength> {
    return this.apiService.get(ApiRoute.RESUME + '/update/strength/' + strengthId).map(res => <Strength>res);
  }

  updateWeakness(data, weaknessId: string): Observable<Weakness> {
    return this.apiService.get(ApiRoute.RESUME + '/update/weakness/' + weaknessId).map(res => <Weakness>res);
  }

  updateObjective(data, ObjectiveId: string): Observable<Objective> {
    return this.apiService.get(ApiRoute.RESUME + '/update/objective/' + ObjectiveId).map(res => <Objective>res);
  }

  addOrUpdateVideo(data, contactDetailId: string): Observable<Contact> {
    return this.apiService.get(ApiRoute.RESUME + '/import/video/' + contactDetailId).map(res => <Contact>res);
  }

  // Delete Api
  deleteResume(id: string): Observable<Resume> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/resume/' + id).map(res => <Resume>res);
  }
  deleteEducation(id: string): Observable<Contact> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/education/' + id).map(res => <Contact>res);
  }
  deleteEmploymentHistory(id: string): Observable<EmploymentHistory> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/employmentHistory/' + id).map(res => <EmploymentHistory>res);
  }
  deleteLanguage(id: string): Observable<Language> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/language/' + id).map(res => <Language>res);
  }
  deleteSkill(id: string): Observable<Skill> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/skill/' + id).map(res => <Skill>res);
  }
  deleteRefrence(id: string): Observable<Refrence> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/refrence/' + id).map(res => <Refrence>res);
  }
  deleteAwardAchivement(id: string): Observable<AwarsAchivement> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/awardAchivements/' + id).map(res => <AwarsAchivement>res);
  }
  deleteInterest(id: string): Observable<Interest> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/interest/' + id).map(res => <Interest>res);
  }
  deleteIndustrialExposure(id: string): Observable<IndustrialExposure> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/industrialExposure/' + id).map(res => <IndustrialExposure>res);
  }
  deleteProjectDetail(id: string): Observable<ProjectDetail> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/projectDetail/' + id).map(res => <ProjectDetail>res);
  }
  deleteStrength(id: string): Observable<Strength> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/strength/' + id).map(res => <Strength>res);
  }
  deleteWeakness(id: string): Observable<Weakness> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/weakness/' + id).map(res => <Weakness>res);
  }
  deleteObjective(id: string): Observable<Objective> {
    return this.apiService.get(ApiRoute.RESUME + '/delete/objective/' + id).map(res => <Objective>res);
  }
}
