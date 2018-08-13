import {Component} from '@angular/core';

@Component({
  selector: 'app-education-form',
  template: `
    <div fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput placeholder="School or college Name"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="City"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="State"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Field"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Percentage"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Degree type"/>
      </mat-form-field><mat-form-field>
        <input matInput placeholder="End month"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="End year"/>
      </mat-form-field>
      <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`
  `]
})
export class EducationFormComponent {
}
