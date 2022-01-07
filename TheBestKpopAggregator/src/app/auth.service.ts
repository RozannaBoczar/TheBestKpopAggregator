import { Injectable,  NgZone } from '@angular/core';
import { AuthModule } from '@angular/fire/auth';
// import {User, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { Observable, switchMap } from 'rxjs';
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
  
  constructor(
    private auth:Auth
  ) {}


  SignIn(email:string, password:string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  SignUp(email:string, password:string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  LogOut() {
    return signOut(this.auth);
  }


  // this.user$ = user(auth).pipe(
  //   switchMap((user: User | null) =>
  //     user
  //       ? docData(doc(this.afs, 'users', user.uid))
  //         as Observable<Profile>
  //       : of(null)
  //   )
  // );
    

  //  }

  //  async getUser(): Promise<User | null> {
  //   return await this.user$.pipe(take(1)).toPromise();
  // }
  
   
  //  public signUp(email:string, password:string)
  //  {
  //   createUserWithEmailAndPassword(this.auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  // //  }

  //  public SignIn(email:string, password:string){
  //   this.afAuth.signInWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     console.log("woof");
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  //  }
   

  //  public GetCurrentUser(){
  //   onAuthStateChanged(this.auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  //  }

  //  public GetUserProfile(){
  //   if (this.user !== null) {
  //     // The user object has basic properties such as display name, email, etc.
  //     const displayName = this.user.displayName;
  //     const email = this.user.email;
  //     const photoURL = this.user.photoURL;
  //     const emailVerified = this.user.emailVerified;
    
  //     // The user's ID, unique to the Firebase project. Do NOT use
  //     // this value to authenticate with your backend server, if
  //     // you have one. Use User.getToken() instead.
  //     const uid = this.user.uid;
  //   }
  //  }
  
}
