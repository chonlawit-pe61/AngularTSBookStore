import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Food {
  value?: string;
  viewValue?: string;
}
interface Pokemon {
  name?: string;
  url: string;
}
interface User {
  id: string;
  username: string;
  passwordSalt: string;
  passwordHash: string;
  name: string;
  lname: string;
  role: string;
  imageName?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {
    var token = localStorage.getItem('token');
    if (token == '') {
      this.router.navigate(['login']);
    } else {
      localStorage.setItem('token', JSON.stringify(token));
    }
  }
}
