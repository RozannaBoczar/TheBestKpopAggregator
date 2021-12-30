import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  email = new FormControl('name@example.com');
  password = new FormControl('password');
  
  ngOnInit(): void {
  }

}
