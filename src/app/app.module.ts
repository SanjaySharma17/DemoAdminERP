import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './layout/components/header/header.component';
 import { AssetFormComponent } from './asset-form/asset-form.component';
// import { LoginFormComponent } from './login-form/login-form.component';
// import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
// import { LayoutComponent } from './layout/layout.component';
// import { BasicConfigurationComponent } from './basic-configuration/basic-configuration.component';
// import { GeneralSettingsComponent } from './general-settings/general-settings.component';
// import { RoleManagementComponent } from './role-management/role-management.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // HeaderComponent,
    AssetFormComponent,
    // LoginFormComponent,
    // SidebarComponent,
    // LayoutComponent,
    // BasicConfigurationComponent,
    // GeneralSettingsComponent,
    // RoleManagementComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
