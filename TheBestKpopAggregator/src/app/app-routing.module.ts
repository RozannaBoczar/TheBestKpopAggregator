import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyAuthService } from './auth.service';

const routes: Routes = [ 
  { path: '', redirectTo: '/login-page', pathMatch: 'full'},

  { path: 'login-page', component: LoginPageComponent },
  {path: 'about-us', component: AboutUsComponent},
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'user-page', redirectTo:'user-page/choose-groups' },
  { path: 'user-page', component: UserPageComponent,
  children: [
    {path: 'view-posts', component: ViewPostsComponent},
    {path: 'choose-groups', component: ChooseGroupComponent},
    {path: 'manage-groups', component: ManageGroupsComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'help', component: HelpComponent},
    {path: 'about-us', component: AboutUsComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
