import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo_url:string = 'assets/img/logo_transparent.png';
  constructor() { }

  ngOnInit(): void {
  }

}
