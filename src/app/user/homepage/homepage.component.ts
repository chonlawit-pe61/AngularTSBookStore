import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataUser } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  private token = localStorage.getItem('Token');
  private path: string = 'https://localhost:7045/api/User/GetMe';
  public user: DataUser;
  constructor(private router: Router, private http: HttpClient) {
    this.CheckJwt();
  }
  async CheckJwt() {
    if (this.token != null && this.token != '') {
      await this.http
        .post<DataUser>(this.path, {
          jwt: this.token,
        })
        .subscribe((res) => {
          this.user = res;
          console.log(this.user);
        });
    } else {
      this.router.navigate(['login']);
    }
  }
  Logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['login']);
  }
}
