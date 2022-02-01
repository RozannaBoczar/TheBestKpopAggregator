import { Injectable,  NgZone } from '@angular/core';
import { AuthModule } from '@angular/fire/auth';
// import {User, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FirebaseApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { Router } from "@angular/router";
import { Firestore } from 'firebase/firestore';

import { Auth, signInWithEmailAndPassword,   createUserWithEmailAndPassword,  signOut } from '@angular/fire/auth';
// import { AngularFireAuth } from "@angular/fire/compat/auth";
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})


export class MyAuthService {
  
//currentUser;
private loggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
//loggedIn = BehaviorSubject(this.currentUser);
public loggedIn$: Observable<boolean> = this.loggedIn.asObservable();

  constructor(
    private auth:Auth
  ) {
    this.authStatusListener();
  }
  
  authStatusListener(){
  this.auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("woof");
      this.loggedIn.next(true);
    } else {
      // not logged in
      console.log("not woof");
      this.loggedIn.next(false);
    } 
  });}

  SignIn(email:string, password:string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  SignUp(email:string, password:string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  LogOut() {
    return signOut(this.auth);
  }

  public isLoggedIn(): boolean {
    return !!this.auth.currentUser;
  }

  
}
