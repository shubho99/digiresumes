import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template-card',
  template: `
    <mat-card (click)="openTemplate()" matRipple fxLayout="column">
      <img mat-card-image [src]="template.src"/>
      <span class="special-span" color="accent">{{template.name}}</span>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 351px;
      margin: 20px 0px;
      /*background: linear-gradient(to bottom, #ffffff 0%, #f2f2f2 100%);*/
      background: #eaf1f8;
      color: #538ec3;
      text-transform: uppercase;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      height: 555px;
      margin-left: 5%;
    }

    img {
      width: 352px;
      height: 495px;
    }

    .special-span {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 14px;
      cursor: pointer;
      margin-left: 22%;
      margin-top: 2%;
      color: #538ec3;
    }
  `]
})
export class TemplateCardComponent {
  @Input() template;
  @Input() resumeId = '';

  constructor(private router: Router) {
  }

  openTemplate() {
    this.router.navigateByUrl('/user/resume/template/' + this.resumeId + '/' + this.template.id);
  }
}
