import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    var token = localStorage.getItem('token');
    if ((token = '')) {
      this.router.navigateByUrl('/login');
    } else {
      localStorage.setItem('token', JSON.stringify(token));
    }
  }
}
