import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';
import {EmploymentHistory} from '../../../core/models/employment-history';
import {EmploymentHistoryFormComponent} from '../../dialogues/resume-form/employment-history-form.component';

@Component({
  selector: 'app-employment-history-form-card',
  template: `
    <div fxLayoutAlign="center center" fxLayout="column">
      <ng-container>
        <div class="outer-div" fxLayoutAlign="center center" fxLayout="column">
          <ng-container>
            <h3>{{employmentHistory.employer}}</h3>
            <h3>{{employmentHistory.organisation}}</h3>
            <p>{{employmentHistory.designation}}</p>
            <p>{{employmentHistory.city}}</p>
          </ng-container>
          <div fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center center">
            <div class="overlay">
              <div class="hover">
                <button style="margin-top: 1%" (click)="edit()" mat-icon-button>
                  <mat-icon >create</mat-icon>
                </button>
                <button  style="margin-top: 1%" (click)="delete()" mat-icon-button>
                  <mat-icon>delete</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`
    mat-icon {
      font-size: 35px;
      text-align: center;
      color: white;
    }
  `]
})
export class EmploymentHistoryFormCardComponent {
  @Input() employmentHistory: EmploymentHistory;
  @Input() resumeId: string;
  loading = false;

  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepoService, private alert: AlertService) {
  }

  edit() {
    const dialogRef = this.dialog.open(EmploymentHistoryFormComponent, {
      disableClose: true,
      data: {employment_history: this.employmentHistory, resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.loading = true;
    this.resumeRepo.deleteEmploymentHistory(this.resumeId, this.employmentHistory._id).subscribe((res) => {
      this.loading = false;
      this.alert.success('Employment History deleted Successfully');
    });
  }
}
