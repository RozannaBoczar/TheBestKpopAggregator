import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ChooseGroupComponent } from './choose-group/choose-group.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'user-page', redirectTo:'user-page/choose-groups' },
  { path: 'user-page', component: UserPageComponent,
  children: [
    //{path: 'help', component: HelpComponent},
    {path: 'view-posts', component: ViewPostsComponent},
    {path: 'choose-groups', component: ChooseGroupComponent},
   // {path: 'about-us', component: AboutUsComponent},
   // {path: 'manage-groups', component: ManageGroupsComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
