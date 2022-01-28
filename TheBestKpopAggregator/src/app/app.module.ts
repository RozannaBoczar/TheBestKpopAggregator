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
import { MyAuthService } from './auth.service';

import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth, Auth } from '@angular/fire/auth';
import { FirebaseApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { CommonModule } from "@angular/common";

import {ScrollingModule} from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
//import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

import { getStorage, provideStorage } 
from '@angular/fire/storage';
import { getAnalytics, provideAnalytics } 
from '@angular/fire/analytics';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
//import { NotAllowedComponent } from './not-allowed/not-allowed.component';


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
    ManageGroupsComponent,
    SettingsComponent,
    HelpComponent,
    AboutUsComponent,
    NotAllowedComponent,
    //NotAllowedComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ScrollingModule,
    InfiniteScrollModule,
   // AngularFireAuthGuard,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideAnalytics(() => getAnalytics())



  ],
  providers: [
    MyAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
