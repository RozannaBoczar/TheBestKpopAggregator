import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { By } from '@angular/platform-browser';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth, Auth } from '@angular/fire/auth';
import { FirebaseApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';


import { getStorage, provideStorage } 
from '@angular/fire/storage';
import { getAnalytics, provideAnalytics } 
from '@angular/fire/analytics';
import { UserPageComponent } from '../user-page/user-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let component2: UserPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let fixture2: ComponentFixture<UserPageComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent, UserPageComponent ],
      imports:[
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideStorage(() => getStorage()),
        provideAnalytics(() => getAnalytics()),
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login', () => {
    component.SignIn("rozia@test.com", "woofwoof");
    fixture.detectChanges();
    fixture2 = TestBed.createComponent(UserPageComponent);
    component2 = fixture2.componentInstance;
    fixture2.detectChanges();
    expect(component2).toBeTruthy();
  });

  it('falseLogin', () => {
    component.SignIn("rozffffffffft.com", "woofwoof");
    fixture.detectChanges();
    expect(component2).toBeFalsy();
  });


});
