import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';
import * as pdf from 'jspdf';

@Component({
  selector: 'app-template',
  template: `
    <div  id="html" #html  fxLayout="column" fxLayoutGap="5px" fxFlexAlign="center center">
      <div>
        <h1 class="name">{{this.resume.contact_details.first_name}}
          {{this.resume.contact_details.last_name}}</h1>
        <p class="center-align small-p">{{this.resume.contact_details.address}}<br>
          {{this.resume.contact_details.city}},{{this.resume.contact_details.state}}-{{this.resume.contact_details.zip_code}}<br>
          {{this.resume.contact_details.phone_number}}
        </p>
        <a  class="center-align" href="#">{{this.resume.contact_details.email}}</a>
      </div>
      <div >
        <p class="center-align">{{this.resume.contact_details.summary}}</p>
      </div>
    </div>
    <button mat-button color="primary" (click)="download()">save</button>

  `,
  styles: [`    

    .name {
      text-transform: uppercase !important;
      font-size: 40px;
      margin-left: 25%;
    }

    a {
      font-size: 15px;
    }

    .small-p {
      font-size: 15px;
      color: #767270;
    }
  `]
})
export class TemplatesComponent implements OnInit, OnDestroy {
  @ViewChild('html') html: ElementRef;
  isAlive = true;
  resume: Resume;

  constructor(private router: Router, private route: ActivatedRoute,
              private resumeRepo: ResumeRepoService) {
  }

  ngOnInit() {
    this.route.params.map(params => params['id']).switchMap((id) => {
      return this.resumeRepo.getResume(id);
    }).filter(res => !!res).takeWhile(() => this.isAlive).subscribe((res) => {
      this.resume = res;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  download() {
    const specialElementHandler = {
      '#html': function (element, renderer) {
        return true;
      }
    };
    const doc = new pdf();
    const content = this.html.nativeElement;
    doc.setFont('Roboto');
    doc.fromHTML(content, 20, 20, {
      'width': 180,
      'elementHandlers': specialElementHandler
    });
    doc.save('test');
  }

}
