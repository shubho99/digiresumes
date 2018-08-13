import {Component} from '@angular/core';

@Component({
  selector: 'app-references-form',
  template: `
    <div fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput placeholder="Mention your Name"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Relationship"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Company"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput type="email" placeholder="Email"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput type="number" placeholder="Mobile Number"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput  placeholder="Address"/>
      </mat-form-field>
      <button style="width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`
  `]
})
export class ReferenceFormComponent {
}
