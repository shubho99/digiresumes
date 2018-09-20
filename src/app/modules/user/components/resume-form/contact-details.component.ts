import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Contact} from '../../../core/models/resume';
import {MatDialog} from '@angular/material';
import {ContactDetailsFormComponent} from '../../dialogues/resume-form/contact-details-form.component';

@Component({
  selector: 'app-contact-details',
  template: `
    <div style="position: relative" fxLayoutAlign="center center" fxLayout="column">
      <ng-container>
        <div class="outer-div" fxLayoutAlign="center center" fxLayout="column">
          <ng-container *ngIf="contactDetails">
            <h3>{{contactDetails.first_name}}</h3>
            <h3>{{contactDetails.last_name}}</h3>
            <p>{{contactDetails.address}}</p>
            <p>{{contactDetails.city}}</p>
            <p>{{contactDetails.country}}</p>
          </ng-container>
          <ng-container *ngIf="!contactDetails">
            <h3 style="    height: 58px;
    margin-top: 3%;">No Contact Details added yet.</h3>
          </ng-container>
          <div fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center center" fxHide.xs>
            <div class="overlay">
              <div class="hover">
                <button style="margin-top: 3%" (click)="edit()" mat-icon-button>
                  <mat-icon *ngIf="contactDetails">create</mat-icon>
                  <mat-icon  *ngIf="!contactDetails">add</mat-icon>
                </button>
              </div>
            </div>
          </div>       
        </div>
      </ng-container>
      <div style="position: absolute; top: 72%; right: -8%;" fxLayoutAlign="start center" fxHide.gt-xs>
        <button mat-icon-button [matMenuTriggerFor]="menu">
          <mat-icon style="color: #333333;font-size: 35px">more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu" direction="vertical" [overlapTrigger]="false">
          <button (click)="edit()"  mat-menu-item>
            <mat-icon style="font-size: 30px" *ngIf="contactDetails" matTooltip="create">create</mat-icon>
            <mat-icon style="font-size: 30px" *ngIf="!contactDetails" matTooltip="add">add</mat-icon>
          </button>
        </mat-menu>
      </div>
    </div>
  `,
  styles: [`  
    mat-icon {
      font-size: 43px;
      text-align: center;
      color: white;
    }
    @media screen and (max-width: 599px) {
      button.mat-menu-item {
        width: 100% !important;
      }
    }
  `]
})
export class ContactDetailsComponent implements OnDestroy, OnInit {
  isAlive = true;
  @Input() contactDetails: Contact;
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  edit() {
    const dialogRef = this.dialog.open(ContactDetailsFormComponent, {
      disableClose: true,
      data: {contactDetails: this.contactDetails, resume_id: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
