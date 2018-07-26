import {Component} from '@angular/core';

@Component({
  selector: 'app-contact-details',
  template: `
    <div  fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput placeholder="First Name"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Last Name"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Mobile Number"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Email"/>
      </mat-form-field>
      <mat-form-field>
        <textarea matInput rows="5" placeholder="Address"></textarea>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="City"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="State"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput type="number" placeholder="Zip Code"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Country"/>
      </mat-form-field>
      <mat-form-field>
        <textarea matInput rows="5" placeholder="Summary"></textarea>
      </mat-form-field>
      <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`

  `]
})
export class ContactDetailsComponent {
  constructor() {
  }
}
