
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ApiRoute} from '../utils/utils';
import {Observable} from 'rxjs';
import {Contact, Resume} from '../models/resume';
import {Education} from '../models/education';
import {EmploymentHistory} from '../models/employment-history';
import {Language} from '../models/language';
import {Skill} from '../models/skill';
import {Refrence} from '../models/refrence';
import {AwardsAchivement} from '../models/awards-achivement';
import {Interest} from '../models/interest';
import {IndustrialExposure} from '../models/industrial-exposure';
import {ProjectDetail} from '../models/project-detail';
import {Strength} from '../models/strength';
import {Weakness} from '../models/weakness';
import {Objective} from '../models/objective';
import {User} from '../models/user';

@Injectable()
export class ResumeService {
  constructor(private apiService: ApiService) {
  }

  // data adding API

  addResume(data: { name: string }): Observable<Resume> {
    return this.apiService.post(ApiRoute.RESUME + '/add/resume', data).pipe(map(res => <Resume>res));
  }

  addContactDetails(data: {
    first_name: string, last_name: string,
    phone_number: number, email: string, address: string, city: string, state: string,
    zip_code: number, country: string, summary: string
  }, resumeId: string): Observable<Contact> {
    return this.apiService.post(ApiRoute.RESUME + '/add/contactDetails/' + resumeId, data).pipe(map(res => <Contact>res));
  }

  addEducation(data: {
    school_name: string, city: string, state: string, field: string,
    degree_type: string, graduation_month: string, graduation_year: number, percentage: string
  }, resumeId: string): Observable<Education> {
    return this.apiService.post(ApiRoute.RESUME + '/add/education/' + resumeId, data).pipe(map(res => <Education>res));
  }

  addEmploymentHistory(data: {
    employer: string, designation: string, city: string, state: string, organisation: string,
    start_month: string, start_year: string, end_month: string, end_year: number
  }, resumeId: string): Observable<EmploymentHistory> {
    return this.apiService.post(ApiRoute.RESUME + '/add/employmentHistory/' + resumeId, data).pipe(map(res => <EmploymentHistory>res));
  }

  addLanguage(data: { name: string, level: string, represent: string }, resumeId: string): Observable<Language> {
    return this.apiService.post(ApiRoute.RESUME + '/add/language/' + resumeId, data).pipe(map(res => <Language>res));
  }

  addSkill(data: { skill: string, level: string, represent: string }, resumeId: string): Observable<Skill> {
    return this.apiService.post(ApiRoute.RESUME + '/add/skill/' + resumeId, data).pipe(map(res => <Skill>res));
  }

  addRefrence(data: {
    name: string, relationship: string, company: string, email: string,
    phone: number, address: string
  }, resumeId: string): Observable<Refrence> {
    return this.apiService.post(ApiRoute.RESUME + '/add/refrence/' + resumeId, data).pipe(map(res => <Refrence>res));
  }

  addAward(data: { awards_and_achivements: string }, resumeId: string): Observable<AwardsAchivement> {
    return this.apiService.post(ApiRoute.RESUME + '/add/award/' + resumeId, data).pipe(map(res => <AwardsAchivement>res));
  }

  addInterest(data: { interest: string }, resumeId: string): Observable<Interest> {
    return this.apiService.post(ApiRoute.RESUME + '/add/interest/' + resumeId, data).pipe(map(res => <Interest>res));
  }

  addIndustrialExposure(data: {
    organisation: string, city: string, state: string,
    start_month: number, start_year: number, end_month: string, end_year: number,
    work: string
  }, resumeId: string): Observable<IndustrialExposure> {
    return this.apiService.post(ApiRoute.RESUME + '/add/industrialExposure/' + resumeId, data).pipe(map(res => <IndustrialExposure>res));
  }

  addProjectDetails(data: {
    title: string, description: string,
    role: string, duration: string
  }, resumeId: string): Observable<ProjectDetail> {
    return this.apiService.post(ApiRoute.RESUME + '/add/projectDetail/' + resumeId, data).pipe(map(res => <ProjectDetail>res));
  }

  addStrength(data: { name: string }, resumeId: string): Observable<Strength> {
    return this.apiService.post(ApiRoute.RESUME + '/add/strength/' + resumeId, data).pipe(map(res => <Strength>res));
  }

  addWeakness(data: { name: string }, resumeId: string): Observable<Weakness> {
    return this.apiService.post(ApiRoute.RESUME + '/add/weakness/' + resumeId, data).pipe(map(res => <Weakness>res));
  }

  addObjective(data: { objective: string, date: number, place: string, declaration: string }, resumeId: string): Observable<Objective> {
    return this.apiService.post(ApiRoute.RESUME + '/add/objective/' + resumeId, data).pipe(map(res => <Objective>res));
  }

  addOrUpdateImage(image: File, resumeId: string): Observable<Resume> {
    const formData: FormData = new FormData();
    formData.append('profile_image', image);
    return this.apiService.post(ApiRoute.RESUME + '/add/image/' + resumeId, formData).pipe(map(res => <Resume>res));
  }

  deleteImage(data: { image_url: string }, resumeId: string): Observable<Resume> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/image/' + resumeId, data).pipe(map(res => <Resume>res));
  }

  // Get dataApi
  getAllResumes(): Observable<Resume[]> {
    return this.apiService.get(ApiRoute.RESUME + '/all').pipe(map(res => <Resume[]>res));
  }

  getResume(resumeId): Observable<Resume> {
    return this.apiService.get(ApiRoute.RESUME + '/' + resumeId).pipe(map(res => <Resume>res));
  }

  // Update Api
  updateResume(data, resumeId: string): Observable<Resume> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/resume/' + resumeId, data).pipe(map(res => <Resume>res));
  }


  updateContactDetails(data, contactDetailId: string): Observable<Contact> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/contactDetails/' + contactDetailId, data).pipe(map(res => <Contact>res));
  }

  updateEducation(data, educationId: string): Observable<Education> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/education/' + educationId, data).pipe(map(res => <Education>res));
  }

  updateEmploymentHistory(data, employmentHistoryId: string): Observable<EmploymentHistory> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/employmentHistory/' + employmentHistoryId, data).pipe(
      map(res => <EmploymentHistory>res));
  }

  updateLanguage(data, languageId: string): Observable<Language> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/language/' + languageId, data).pipe(map(res => <Language>res));
  }

  updateSkill(data, skillId: string): Observable<Skill> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/skill/' + skillId, data).pipe(map(res => <Skill>res));
  }

  updateRefrence(data, refrenceId: string): Observable<Refrence> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/refrence/' + refrenceId, data).pipe(map(res => <Refrence>res));
  }

  updateAwardAchivement(data, awardAchivementId: string): Observable<AwardsAchivement> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/awardAchivements/' + awardAchivementId, data).pipe(map(res => <AwardsAchivement>res));
  }

  updateInterest(data, interestId: string): Observable<Interest> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/interest/' + interestId, data).pipe(map(res => <Interest>res));
  }

  updateIndustrialExposure(data, industrialExposureId: string): Observable<IndustrialExposure> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/industrialExposure/' + industrialExposureId, data).pipe(
      map(res => <IndustrialExposure>res));
  }

  updateProjectDetail(data, projectDetailId: string): Observable<ProjectDetail> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/projectDetail/' + projectDetailId, data).pipe(map(res => <ProjectDetail>res));
  }

  updateStrength(data, strengthId: string): Observable<Strength> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/strength/' + strengthId, data).pipe(map(res => <Strength>res));
  }

  updateWeakness(data, weaknessId: string): Observable<Weakness> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/weakness/' + weaknessId, data).pipe(map(res => <Weakness>res));
  }

  updateViewsCount(data: { views: number }, id: string): Observable<Resume> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/resume/views/' + id, data).pipe(map(res => <Resume>res));
  }

  updateObjective(data, ObjectiveId: string): Observable<Objective> {
    return this.apiService.patch(ApiRoute.RESUME + '/update/objective/' + ObjectiveId, data).pipe(map(res => <Objective>res));
  }


  addOrUpdateVideo(data: { video_url: string }, resumeId: string): Observable<Resume> {
    return this.apiService.patch(ApiRoute.RESUME + '/import/video/' + resumeId, data).pipe(map(res => <Resume>res));
  }

  // Delete Api
  deleteResume(id: string): Observable<Resume> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/resume/' + id).pipe(map(res => <Resume>res));
  }

  deleteEducation(id: string): Observable<Education> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/education/' + id).pipe(map(res => <Education>res));
  }

  deleteEmploymentHistory(id: string): Observable<EmploymentHistory> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/employmentHistory/' + id).pipe(map(res => <EmploymentHistory>res));
  }

  deleteLanguage(id: string): Observable<Language> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/language/' + id).pipe(map(res => <Language>res));
  }

  deleteSkill(id: string): Observable<Skill> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/skill/' + id).pipe(map(res => <Skill>res));
  }

  deleteRefrence(id: string): Observable<Refrence> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/refrence/' + id).pipe(map(res => <Refrence>res));
  }

  deleteAwardAchivement(id: string): Observable<AwardsAchivement> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/awardAchivements/' + id).pipe(map(res => <AwardsAchivement>res));
  }

  deleteInterest(id: string): Observable<Interest> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/interest/' + id).pipe(map(res => <Interest>res));
  }

  deleteIndustrialExposure(id: string): Observable<IndustrialExposure> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/industrialExposure/' + id).pipe(map(res => <IndustrialExposure>res));
  }

  deleteProjectDetail(id: string): Observable<ProjectDetail> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/projectDetail/' + id).pipe(map(res => <ProjectDetail>res));
  }

  deleteStrength(id: string): Observable<Strength> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/strength/' + id).pipe(map(res => <Strength>res));
  }

  deleteWeakness(id: string): Observable<Weakness> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/weakness/' + id).pipe(map(res => <Weakness>res));
  }

  deleteObjective(id: string): Observable<Objective> {
    return this.apiService.delete(ApiRoute.RESUME + '/delete/objective/' + id).pipe(map(res => <Objective>res));
  }
}
