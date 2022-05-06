import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-volgenau-details',
  templateUrl: './volgenau-details.component.html',
  styleUrls: ['./volgenau-details.component.css']
})
export class VolgenauComponent implements OnInit {

  title = 'Volgenau School of Engineering';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
