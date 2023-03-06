import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CompleteProfileComponent } from './complete-profile.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule],
  declarations: [CompleteProfileComponent],
  providers: [],
  exports: [CompleteProfileComponent]
})
export class CompleteProfileComponentModule {
}
