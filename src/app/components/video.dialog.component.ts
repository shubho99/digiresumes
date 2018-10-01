import {Component} from '@angular/core';

@Component({
  selector: 'app-video-dialog',
  template: `
    <iframe width="100%" height="100%" frameborder="0"   allowfullscreen="true"
            [src]="'https://www.youtube.com/watch?v=3zQMgzidmEg&feature=youtu.be' | safeUrl"></iframe >
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
