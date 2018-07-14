import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatExpansionModule,
      MatSnackBarModule
    ],
    exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatExpansionModule,
      MatSnackBarModule
    ]
})
export class MaterialModule {}
