import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(id) {
    console.log(id);
    const url = 'https://www.youtube.com/embed/' + id + '?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

