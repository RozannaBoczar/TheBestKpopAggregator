import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyAuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    public authService: MyAuthService,
    private readonly router: Router) { }

  email = new FormControl('name@example.com');
  password = new FormControl('password');
  
  alarmContent = "";

  ngOnInit(): void {
  }

  SignUp(email:string, password:string) {
    this.authService
      .SignUp(email, password)
      .then(()=>{
        this.router.navigate(['login-page']);
        window.alert("You a re signed up! Please, log in!");
        this.alarmContent = "You a re signed up! Please, log in!";

      })
      .catch((e) => {
        this.alarmContent = "Wrong email or password. Try again!";
        window.alert("Wrong email or password. Try again!")
        console.log(e.message);
      });
  }

}
