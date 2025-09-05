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
  mail : new FormControl(''),
  password : new FormControl(''),

  });

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
