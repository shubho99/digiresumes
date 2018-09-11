import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatMenuModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatSelectModule,
  MatTooltipModule,
  MatRippleModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatListModule

];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialModule {
}
