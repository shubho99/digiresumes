import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ShareComponent} from '../dialogues/share.component';

@Component({
  selector: 'app-resume-buttons',
  template: `
    <div  fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="center start">
      <button (click)="editResume()" mat-mini-fab>
        <mat-icon style="font-size: 25px" matTooltip="edit-resume">assignment</mat-icon>
      </button>
      <button (click)="editProfile()" mat-mini-fab>
        <mat-icon style="font-size: 25px" matTooltip="edit-profile video or picture">
          videocam
        </mat-icon>
      </button>
      <button (click)="share()" mat-mini-fab>
        <mat-icon style="font-size: 25px" matTooltip="share">share</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    button {
      background-color: #f1c232 !important;
    }

    mat-icon {
      color: black !important;
    }
  `]
})
export class ResumeButtonsComponent {
  @Input() resumeId: string;

  constructor(private router: Router, private dialog: MatDialog) {
  }

  share() {
    const dialogRef = this.dialog.open(ShareComponent, {data: this.resumeId});
    dialogRef.updateSize('70%', '30%');
  }

  editProfile() {
    this.router.navigateByUrl('/user/edit/profile/' + this.resumeId);
  }

  editResume() {
    this.router.navigateByUrl('/user/edit/resume/' + this.resumeId);
  }
}
