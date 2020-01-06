import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ActivityPanelComponent } from './components/activity-panel/activity-panel.component';
import { AllUserAdminComponent } from './components/all-user-admin/all-user-admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestFormComponent } from './components/test-form/test-form.component';
import { ActivityFormComponent } from './components/activity-form/activity-form.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AppInfoComponent } from './components/app-info/app-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivityPanelComponent,
    AllUserAdminComponent,
    TestFormComponent,
    ActivityFormComponent,
    NavigationMenuComponent,
    UserProfileComponent,
    AppInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
