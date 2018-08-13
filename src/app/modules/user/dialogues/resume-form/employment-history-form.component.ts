import {Component} from '@angular/core';

@Component({
  selector: 'app-employment-history-form',
  template: `
    <div fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput placeholder="Employer"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Designation"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Organisation"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="City"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="State"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Stating Month"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="End Month"/>
      </mat-form-field>
      <mat-form-field>
      <input matInput placeholder="End month"/>
    </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="End year"/>
      </mat-form-field>
      <button style="width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`
  `]
})
export class EmploymentHistoryFormComponent {
}
