import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllUserAdminComponent } from './components/all-user-admin/all-user-admin.component';
import { RegisterComponent } from './components/register/register.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { ActivityPanelComponent } from './components/activity-panel/activity-panel.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AppInfoComponent } from './components/app-info/app-info.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AllUserAdminComponent},
  { path: 'registration', component: RegisterComponent},
  { path: 'test', component: TestFormComponent},
  { path: 'activityPanel', component: ActivityPanelComponent}, 
  { path: 'myProfile', component: UserProfileComponent},
  { path: 'infoOaplikacji', component: AppInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
