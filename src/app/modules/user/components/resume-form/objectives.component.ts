import {Component} from '@angular/core';

@Component({
  selector: 'app-objectives',
  template: `
    <div fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput placeholder="Your Objective"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput type="number" placeholder="Date"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Place"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Declaration"/>
      </mat-form-field>
      <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`
  `]
})
export class ObjectivesComponent {
}
