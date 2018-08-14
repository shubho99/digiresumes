import {Component} from '@angular/core';

@Component({
  selector: 'app-import-video',
  template: `
    <div style="margin-top: 3%" fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput placeholder="Youtube URL">
        <mat-error>Provide YouTube Video URL</mat-error>
      </mat-form-field>
      <div fxLayout="row" fxLayoutAlign="end center">
        <button mat-raised-button color="primary" [disabled]="loading"
                color="accent">
          Import
        </button>
      </div>
    </div>

  `,
  styles: [`
  `]
})

export class ImportVideoComponent {
  loading = false;

  constructor() {
  }
}
