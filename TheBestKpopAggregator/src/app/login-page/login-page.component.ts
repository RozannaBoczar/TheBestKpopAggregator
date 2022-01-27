import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyAuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css',
]
})
export class LoginPageComponent implements OnInit {

  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();

  email = new FormControl('');
  password = new FormControl('');
  
  constructor( 
    public authService: MyAuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
    
  }

  SignIn(email: string, password: string){
    this.authService.SignIn(email, password)
    .then(()=>this.router.navigate(['user-page']))
    .catch((e) => {
      window.alert("Wrong email or password!");
      console.log(e.message);
    })
    // .then(() => {
    //   window.location.reload();
    //   });
      
  }

  seeABoutUs(){
    this.router.navigate(['about-us']);
  }


}
