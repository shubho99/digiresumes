import {Component} from '@angular/core';

@Component({
  selector: 'app-interest-form',
  template: `
    <div fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <textarea  rows="5" matInput placeholder="Describe your interest"></textarea>
      </mat-form-field>
      <button style="width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`
  `]
})
export class InterestFormComponent {
}
