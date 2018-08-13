import {Component} from '@angular/core';

@Component({
  selector: 'app-awards-form',
  template: `
    <div fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <textarea rows="5" matInput placeholder="Describe about your awards and achievement"></textarea>
      </mat-form-field>
      <button style="width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`
  `]
})
export class AwardsFormComponent {
}
