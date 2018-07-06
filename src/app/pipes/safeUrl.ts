import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(url,isId = false) {
    const url_regex = new RegExp ('^((?:https?:)?\\/\\/)?((?:www|m)\\.)?((?:youtube\\.com|youtu.be))(\\/(?:[\\w\\-]+\\?v=|embed\\/|v\\/)?)([\\w\\-]+)(\\S+)?$');
    if(url_regex.test(url)){
      // const id_regex = new RegExp(/(?:\?v=)([^&]+)(?:\&)*/);
      const id_regex = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
const id = id_regex[1];
      let new_url = 'https://www.youtube.com/embed/' + id;
      return this.domSanitizer.bypassSecurityTrustResourceUrl(new_url);
    }
    else if(isId){
      let new_url = 'https://www.youtube.com/embed/' + url;
      console.log(url);
      return this.domSanitizer.bypassSecurityTrustResourceUrl(new_url);
    }
    else{
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
    // let url = 'https://www.youtube.com/embed/' + id;
    // return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

