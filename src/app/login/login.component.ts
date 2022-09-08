import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserToken } from '../interfaces/interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  private CheckToken: string;
  formUserLogin = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  onSubmit(): void {
    //same get Data fromUserLogin.Value
    // const { username, password } = this.formUserLogin.value;
    const obj = {
      username: this.formUserLogin.value.username,
      password: this.formUserLogin.value.password,
    };
    this.http
      .post<UserToken>('https://localhost:7045/api/User/Login', obj)
      .subscribe((res) => {
        this.CheckToken = res.token;
        localStorage.setItem('Token', res.token);
        console.log(res);
        this.router.navigate(['/HomePage']);
      });
  }
}
