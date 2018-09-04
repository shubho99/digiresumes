import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepoService} from '../../core/repositry/resumeRepo.service';
import {Resume} from '../../core/models/resume';


@Component({
  selector: 'app-template',
  template: `
    <div fxLayout="column" class="html" fxLayoutGap="5px" fxFlexAlign="center center">
      <div>
        <h1 class="name center-align">{{this.resume.contact_details.first_name}}
          {{this.resume.contact_details.last_name}}</h1>
        <p class="center-align small-p">{{this.resume.contact_details.address}}<br>
          {{this.resume.contact_details.city}},{{this.resume.contact_details.state}}-{{this.resume.contact_details.zip_code}}<br>
          {{this.resume.contact_details.phone_number}}
        </p>
        <h5 class="center-align"><u>{{this.resume.contact_details.email}}</u></h5>
      </div>
      <div>
        <p class="center-align">{{this.resume.contact_details.summary}}</p>
      </div>
      <style>
        .name {
          text-transform: uppercase !important;
          font-size: 40px;
        }

        .center-align {
          text-align: center;
        }

        .small-p {
          font-size: 15px;
          color: #767270;
          word-break: break-word;
        }

        @media print {
          .html {
            visibility: visible;
          }
        }

        @page {
          margin: 0mm !important;
          size: auto !important;
        }
      </style>
    </div>
    <button mat-button color="primary" (click)="download()">save</button>

  `,
  styles: [`

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
    document.body.style.visibility = 'hidden';
    window.print();
    document.body.style.visibility = 'visible';
  }
}

