import {Component} from '@angular/core';

@Component({
  selector: 'app-video-dialog',
  template: `
    <iframe width="100%" height="100%" frameborder="0"  allowfullscreen="true"
            [src]="'EfcD8SrVh0c' | safeUrl"></iframe>
  `,
  styles: [`
    body {
      width: 100%;
      height: 100%;
    }

  `]
})
export class VideoDialogComponent {
}
