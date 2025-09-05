import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  formGroup = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    console.log('Login data:', this.formGroup.value);
  }
}
