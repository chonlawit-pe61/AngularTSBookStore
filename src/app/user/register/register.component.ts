import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formUserRegister = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    role: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    lname: new FormControl(null, Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {}
}
