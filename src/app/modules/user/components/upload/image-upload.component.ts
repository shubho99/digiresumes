import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-image-upload-component',
  template: `
    <div style="margin-top: 3%" fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="50px">
      <input type="file" (change)="onFileSelected($event)" accept="image/jpeg, image/png" #fileInput hidden/>
      <h1>
        <mat-icon>cloud_upload</mat-icon>
        Upload Profile Image
      </h1>
      <button mat-raised-button type="button" fxFlexAlign="center" color="accent" (click)="selectFile()">
        <mat-icon>{{icon}}</mat-icon>
        <span *ngIf="this.imageSelected">CHANGE</span>
        <span *ngIf="!this.imageSelected">SELECT</span>
      </button>
      <img #previewImg height="200px"/>
      <button *ngIf="this.imageSelected" mat-raised-button color="accent">SAVE</button>
    </div>
  `,
  styles: [`
    h1 {
      color: #7de261;
      text-shadow: 1px 0px 2px rgba(0, 0, 0.75);
    }
  `],
})
export class ImageUploadComponent {
  image;
  file: File;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('previewImg') previewImg: ElementRef;
  imageSelected = false;
  icon = 'add';

  constructor() {
  }

  onFileSelected(event) {
    this.icon = 'cached';
    this.imageSelected = true;
    const file = event.target.files[0];
    this.file = file;
    this.previewImg.nativeElement.src = window.URL.createObjectURL(this.file);
  }

  selectFile() {
    this.fileInput.nativeElement.click();
  }
}
