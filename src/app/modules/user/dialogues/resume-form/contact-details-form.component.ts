import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Contact} from '../../../core/models/resume';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepoService} from '../../../core/repositry/resumeRepo.service';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-contact-details-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div class="alternate" fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="first_name" matInput placeholder="First Name"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="last_name" matInput placeholder="Last Name"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="phone_number" matInput placeholder="Mobile Number"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="email" matInput placeholder="Email"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="linkedin_url" matInput placeholder="Linked in url(optional)"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="website_url" matInput placeholder="Website url(optional)"/>
        </mat-form-field>
        <mat-form-field>
          <textarea formControlName="address" matInput rows="5" placeholder="Address"></textarea>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="city" matInput placeholder="City"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="state" matInput placeholder="State"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="zip_code" matInput type="number" placeholder="Zip Code"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="country" matInput placeholder="Country"/>
        </mat-form-field>
        <mat-form-field>
          <textarea formControlName="summary" matInput rows="5" placeholder="Summary"></textarea>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button type="submit" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="contactDetails">Update</span>
            <span *ngIf="!contactDetails">Add</span>
          </button>
          <button [disabled]="this.form.invalid" type="button" (click)="cancel()"
                  style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">Cancel
          </button>
        </div>
      </div>
    </form>
    <ngx-loading [show]="loading"></ngx-loading>
  `,
  styles: [`

  `]
})
export class ContactDetailsFormComponent implements OnInit {
  form: FormGroup;
  contactDetails: Contact;
  resume_id: string;
  loading = false;
  webValid = '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';
  linkedInValid = '^https:\\\\/\\\\/[a-z]{2,3}\\\\.linkedin\\\\.com\\\\/.*$';

  constructor(public dialog: MatDialogRef<ContactDetailsFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private resumeRepo: ResumeRepoService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.contactDetails = this.data.contactDetails;
    this.resume_id = this.data.resume_id;
    const firstName = this.contactDetails ? this.contactDetails.first_name : null;
    const lastName = this.contactDetails ? this.contactDetails.last_name : null;
    const phoneNumber = this.contactDetails ? this.contactDetails.phone_number : null;
    const email = this.contactDetails ? this.contactDetails.email : null;
    const address = this.contactDetails ? this.contactDetails.address : null;
    const city = this.contactDetails ? this.contactDetails.city : null;
    const state = this.contactDetails ? this.contactDetails.state : null;
    const zipCode = this.contactDetails ? this.contactDetails.zip_code : null;
    const country = this.contactDetails ? this.contactDetails.country : null;
    const summary = this.contactDetails ? this.contactDetails.summary : null;
    const linkedInUrl = this.contactDetails ? this.contactDetails.linkedin_url : null;
    const website_url = this.contactDetails ? this.contactDetails.website_url : null;
    this.form = new FormGroup({
      'first_name': new FormControl(firstName, [Validators.required]),
      'last_name': new FormControl(lastName, [Validators.required]),
      'phone_number': new FormControl(phoneNumber, [Validators.required]),
      'email': new FormControl(email, [Validators.required]),
      'address': new FormControl(address, [Validators.required]),
      'city': new FormControl(city, [Validators.required]),
      'state': new FormControl(state, [Validators.required]),
      'zip_code': new FormControl(zipCode, [Validators.required]),
      'country': new FormControl(country, [Validators.required]),
      'summary': new FormControl(summary, [Validators.required]),
      'linkedin_url': new FormControl(linkedInUrl, [Validators.pattern(this.linkedInValid)]),
      'website_url': new FormControl(website_url, [Validators.pattern(this.webValid)])
    });
  }

  cancel() {
    this.dialog.close();
  }

  addOrUpdate() {
    if (this.contactDetails) {
      this.updateContactDetails();
    } else {
      this.addContactDetails();
    }
  }

  addContactDetails() {
    this.loading = true;
    this.resumeRepo.addContactDetails(this.form.value, this.resume_id).subscribe(() => {
      this.loading = false;
      this.alert.success('Contact Details added Successfully');
      this.dialog.close();
    });
  }

  updateContactDetails() {
    this.loading = true;
    this.resumeRepo.updateContactDetails(this.form.value, this.contactDetails._id, this.resume_id).subscribe(() => {
      this.loading = false;
      this.alert.success('Contact Details updated Successfully');
      this.dialog.close();
    });
  }
}
