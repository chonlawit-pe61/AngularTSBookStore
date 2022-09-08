import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUserRegister } from 'src/app/interfaces/interface';

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
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    const { username, password, role, name, lname } =
      this.formUserRegister.value;
    const obj = {
      username: username,
      Role: role,
      password: password,
      name: name,
      lname: lname,
    };
    console.log(typeof obj.password);
    this.http
      .post<DataUserRegister>('https://localhost:7045/api/User/CreateUser', obj)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
