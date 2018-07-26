import {Component} from '@angular/core';

@Component({
  selector: 'app-industrial-exposure',
  template: `
    <div fxLayout="column" fxLayoutGap="10px">
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
        <input matInput placeholder="Starting Month"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput type="number" placeholder="Starting Year"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="End Month"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput type="number" placeholder="End Year"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput  placeholder="Tell about your Work"/>
      </mat-form-field>
      <button style="width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`
  `]
})
export class IndustrialExposureComponent {
}
