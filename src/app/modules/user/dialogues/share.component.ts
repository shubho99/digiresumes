import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AlertService} from '../../core/services/alert.service';
import {ClipboardService} from 'ngx-clipboard';

@Component({
  selector: 'app-share',
  template: `
    <div fxLayout="column">
      <div fxLayout="row">
        <mat-form-field>
          <input matInput [value]="this.link" placeholder="Resume link"/>
        </mat-form-field>
        <button (click)="copy()" matTooltip="copy to clipboard" mat-icon-button>
          <mat-icon>filter_none</mat-icon>
        </button>
      </div>
      <div>
        <share-buttons [exclude]="['copy','print']" [showName]="true" [url]="this.link"
                       [title]="'Guys checkout my Resume'"></share-buttons>
      </div>
    </div>

  `,
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `]
})
export class ShareComponent {
  resumeId;
  link;

  constructor(public dialog: MatDialogRef<ShareComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private alertService: AlertService,
              private clipBoard: ClipboardService) {
    this.resumeId = this.data ? this.data : null;
    this.link = 'http://localhost:4200/user/view/resume/' + this.resumeId;
  }

  copy() {
    this.clipBoard.copyFromContent(this.link);
    this.alertService.success('Link Copied to Clipboard');
  }
}
