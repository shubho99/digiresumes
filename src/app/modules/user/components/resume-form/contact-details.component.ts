import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Contact} from '../../../core/models/resume';
import {MatDialog} from '@angular/material';
import {ContactDetailsFormComponent} from '../../dialogues/resume-form/contact-details-form.component';

@Component({
  selector: 'app-contact-details',
  template: `
    <div fxLayoutAlign="center center" fxLayout="column" on-mouseenter="hover=true" on-mouseleave="hover=false">
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
            <h3>Click here to add Contact Details</h3>
          </ng-container>
        </div>
        <div *ngIf="hover" class="hover">
          <div  fxLayout="row" fxLayoutWrap="wrap" fxLayoutGap="30px">
            <button (click)="edit()" mat-icon-button>
              <mat-icon *ngIf="contactDetails">create</mat-icon>
              <mat-icon *ngIf="!contactDetails">add</mat-icon>
            </button>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
    mat-icon {
      font-size: 43px;
      position: relative;
      left: 44%;
      color: white;
      top: 35px;
    }

    .hover {
      position: absolute;
      background-color: rgba(36, 36, 36, 0.81);
      top: 18%;
      bottom: 0;
      right: 0;
      left: 32%;
      height: 15%;
      width: 40%;
      z-index: 100;
    }

    .outer-div {
      background: lightgrey;
      border: 1px dashed #d8d8d8;
      width: 50%;
    }
  `]
})
export class ContactDetailsComponent implements OnDestroy, OnInit {
  isAlive = true;
  hover = false;
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
