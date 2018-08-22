import {Component} from '@angular/core';

@Component({
  selector: 'app-upload-component',
  template: `
    <div class="alternate" fxLayout="column" fxLayoutAlign="start center">
      <mat-tab-group style="width: 100%"  [dynamicHeight]="true" backgroundColor="accent" color="primary">
        <mat-tab label=" UPLOAD PROFILE IMAGE"> <app-image-upload-component></app-image-upload-component></mat-tab>
        <mat-tab label="UPLOAD EXISTING VIDEO"><app-upload-from-disk></app-upload-from-disk></mat-tab>
        <mat-tab label="PASTE YOUTUBE LINK"> <app-import-video></app-import-video></mat-tab>
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
