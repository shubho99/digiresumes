import {Component} from '@angular/core';

@Component({
  selector: 'app-languages-form',
  template: `
    <div fxLayout="column" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput placeholder="Mention your Language"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Level"/>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Represent"/>
      </mat-form-field>
      <button style="width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">Save</button>
    </div>
  `,
  styles: [`
  `]
})
export class LanguagesFormComponent {
}
