import {Component, OnDestroy} from '@angular/core';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';

@Component({
  selector: 'app-resume-form',
  template: `
      <mat-accordion>
        <h1 style="text-align: center; margin-top: 2%; margin-bottom: 2%;">Enter details which you want to see on your Resume</h1>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Contact Details</mat-panel-title>
            <mat-panel-description>
              Enter Your Contact Details
            </mat-panel-description>
          </mat-expansion-panel-header>
          <app-contact-details [resumeId]="resume._id" [contactDetails]="resume.contact_details" ></app-contact-details>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Education</mat-panel-title>
            <mat-panel-description>
              Enter Your Qualifications
            </mat-panel-description>
          </mat-expansion-panel-header>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Employment History</mat-panel-title>
            <mat-panel-description>
              Enter Your Work Experience
            </mat-panel-description>
          </mat-expansion-panel-header>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Hobbies & Interests</mat-panel-title>
            <mat-panel-description>
              Describe your hobbies and interest in detail
            </mat-panel-description>
          </mat-expansion-panel-header>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Professional Skills</mat-panel-title>
            <mat-panel-description>
              Describe your Skills
            </mat-panel-description>
          </mat-expansion-panel-header>
          <app-skills [skills]="resume.skills" [resumeId]="resume._id"></app-skills>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Languages</mat-panel-title>
            <mat-panel-description>
              Describe your known Languages
            </mat-panel-description>
          </mat-expansion-panel-header>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Industrial Exposure</mat-panel-title>
            <mat-panel-description>
              Describe about your Industrial Exposure
            </mat-panel-description>
          </mat-expansion-panel-header>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Awards and Achievement</mat-panel-title>
            <mat-panel-description>
              Describe about your Awards and achievements
            </mat-panel-description>
          </mat-expansion-panel-header>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Objectives</mat-panel-title>
            <mat-panel-description>
              Describe about your Objectives
            </mat-panel-description>
          </mat-expansion-panel-header>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Reference</mat-panel-title>
            <mat-panel-description>
              Describe about your Reference
            </mat-panel-description>
          </mat-expansion-panel-header>
        </mat-expansion-panel>
      </mat-accordion>
  `,
  styles: [`
    mat-expansion-panel {
      width: 90%;
      margin-left: 7%;
      margin-top: 1%;
    }

    mat-card {
      margin-top: 2%;
      width: 95%;
      margin-left: 4%;
      overflow-y: scroll;
      height: 90%;
    }
  `]
})
export class ResumeFormComponent implements OnDestroy {
  resume: Resume;
  isAlive = true;

  constructor(public resumeRepo: ResumeRepoService) {
    this.fetchResume();
  }

  fetchResume() {
    this.resumeRepo.getCurrentResumeId().takeWhile(() => this.isAlive).subscribe((res) => {
      if (res) {
        this.resumeRepo.getResume(res).takeWhile(() => this.isAlive).subscribe((resume) => {
          this.resume = resume;
        });
      }
    });
  }
  ngOnDestroy() {
    this.isAlive = false;
  }
}

