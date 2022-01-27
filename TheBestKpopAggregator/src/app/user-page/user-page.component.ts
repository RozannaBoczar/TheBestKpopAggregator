import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../auth.service';
import { Auth, signInWithEmailAndPassword,   createUserWithEmailAndPassword,  signOut } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {


  isLoggedIn$: Observable<any>;
  isLogged: boolean;

  constructor(public auth: MyAuthService) { 
  }

  ngOnInit(): void {
    //this.auth.isLoggedIn();
    //this.auth.isLoggedIn();
    this.isLoggedIn$ = this.auth.loggedIn$ ;//(auth =>this.isLogged  = auth);

  }


  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //   } else {
  //     // No user is signed in.
  //   }
  // });

}
