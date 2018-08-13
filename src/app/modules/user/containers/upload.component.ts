import {Component} from '@angular/core';

@Component({
  selector: 'app-upload-component',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center">
      <mat-tab-group style="width: 100%"  [dynamicHeight]="true" backgroundColor="accent" color="primary">
        <mat-tab label=" Upload profile image"> <app-image-upload-component></app-image-upload-component></mat-tab>
        <mat-tab label="Upload Existing Video"><app-upload-from-disk></app-upload-from-disk></mat-tab>
        <mat-tab label="Paste YouTube Link"> <app-import-video></app-import-video></mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
  `],
})
export class UploadComponent {
  constructor() {
  }
}
