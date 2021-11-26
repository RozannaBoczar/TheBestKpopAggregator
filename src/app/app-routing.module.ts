import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { SocialMediaPostsComponent } from './social-media-posts/social-media-posts.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'user-page', component: UserPageComponent,
    children: [
      {path: 'help', component: HelpComponent},
      {path: 'view-post', component: ViewPostsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'manage-groups', component: ManageGroupsComponent},
    ] },
  { path: 'login-page', component: LoginPageComponent },
  // {path: 'social-media-posts', component: SocialMediaPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
