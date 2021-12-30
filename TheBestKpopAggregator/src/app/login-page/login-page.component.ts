import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email = new FormControl('name@example.com');
  password = new FormControl('password');
  
  constructor() { }

  ngOnInit(): void {
  }

}
