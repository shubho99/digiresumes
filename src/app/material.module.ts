import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSelectModule, MatSnackBarModule, MatStepperModule, MatTableModule, MatTabsModule, MatTooltipModule
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
  MatTooltipModule
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialModule {
}
