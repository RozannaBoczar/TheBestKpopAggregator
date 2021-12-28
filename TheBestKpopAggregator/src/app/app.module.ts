import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog';
import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
   apiKey: "AIzaSyDao74-CDtE1BEhceNsG2033rm1-JPIdJQ",
  authDomain: "kpopaggreagtor.firebaseapp.com",
  projectId: "kpopaggreagtor",
  storageBucket: "kpopaggreagtor.appspot.com",
  messagingSenderId: "609541919620",
  appId: "1:609541919620:web:11022e94b07d5b871b03d1",
  measurementId: "G-10FJTDK3V4"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    UserPageComponent,
    ChooseGroupComponent,
    ViewPostsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    // AngularFireModule.initializeApp(config),
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
