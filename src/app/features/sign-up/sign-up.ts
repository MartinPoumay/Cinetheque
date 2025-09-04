import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  formGroup = new FormGroup({
  firstname: new FormControl(''),
  lastname: new FormControl(''),
  age : new FormControl(0),
  });

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
