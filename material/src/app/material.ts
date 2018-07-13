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
  MatExpansionModule
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
      MatExpansionModule
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
      MatExpansionModule
    ]
})
export class MaterialModule {}
