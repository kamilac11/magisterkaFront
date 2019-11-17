import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllUserAdminComponent } from './components/all-user-admin/all-user-admin.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AllUserAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
