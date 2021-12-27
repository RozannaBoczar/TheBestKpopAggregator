import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { SocialMediaPostsComponent } from './social-media-posts/social-media-posts.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
// import { TwitterApi} from 'twitter-api-v2';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UserPageComponent,
    ViewPostsComponent,
    SocialMediaPostsComponent,
    ManageGroupsComponent,
    SettingsComponent,
    HelpComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    // TwitterApi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
