import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Resume} from '../../../core/models/resume';

@Component({
  selector: 'app-modern-template',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <mat-card>
        
        <div class="hover" fxLayout="column">
          <div style="    margin-top: 55%;
    margin-left: 46%;" fxLayout="row">
            <i id="hover-i" (click)="download()" class="fa fa-arrow-circle-down" aria-hidden="true"></i>
          </div>
        </div>
      </mat-card>
    </div>

  `,
  styles: [`
    mat-card {
      width: 8in;
      margin-top: 1%;
      box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 1%;
    }

    .hover {
      position: absolute;
      background-color: rgba(36, 36, 36, 0.81);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100;
      height: 100%;
      width: 100%;
      opacity: 0;
    }

    .hover:hover {
      opacity: 0.9;
      transition: opacity .8s;
    }

    #hover-i {
      color: white;
      font-size: 60px;
    }
  `]
})
export class ModernTemplateComponent {
  @Input() resume: Resume;

  @Output() downloadTemplate = new EventEmitter<string>();

  constructor() {

  }

  download() {
    const innerHtml = document.getElementById('html').innerHTML;
    const html = `<html>
<head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style type="text/css">

</style>
<body>
${innerHtml}
</body>
</head>
</html>`;
    this.downloadTemplate.emit(html);
  }
}

//
// <div fxLayout="column" fxLayoutAlign="center center">
//   <mat-card>
//
//     <div class="hover" fxLayout="column">
//       <div style="    margin-top: 55%;
//       margin-left: 46%;" fxLayout="row">
//         <i id="hover-i" (click)="download()" class="fa fa-arrow-circle-down" aria-hidden="true"></i>
//       </div>
//     </div>
//     </mat-card>
//   </div>
