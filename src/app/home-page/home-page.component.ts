import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public token = localStorage.getItem('');
  constructor(private router: Router) {}

  ngOnInit(): void {}
  CheckJwt(): void {
    if (this.token != undefined) {
      console.log(this.token);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
