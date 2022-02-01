import { TestBed } from '@angular/core/testing';
import { MyAuthService } from './auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { signInWithEmailAndPassword,   createUserWithEmailAndPassword,  signOut } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth, Auth } from '@angular/fire/auth';
import { FirebaseApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { getStorage, provideStorage } 
from '@angular/fire/storage';
import { getAnalytics, provideAnalytics } 
from '@angular/fire/analytics';


describe('AuthService', () => {
  let service: MyAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideStorage(() => getStorage()),
        provideAnalytics(() => getAnalytics())
      ],
      providers: [
        {provide: Auth}
      ]
    });
    service = TestBed.inject(MyAuthService);
  });


});
