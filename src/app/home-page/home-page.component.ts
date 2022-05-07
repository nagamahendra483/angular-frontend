import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'WELCOME TO HOME PAGE!';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  gotoSurVeryList(content = "surveys"){
    if(content == "surveys")
      this.router.navigate(['/surveys']);
    else if(content == "cs-dept")
      this.router.navigate(['/cse-dept']);
    else
      this.router.navigate(['/create-survey']);
  }
}
