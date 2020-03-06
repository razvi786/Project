import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
// import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { DeactivateCompanyComponent } from './deactivate-company/deactivate-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ResetComponent } from './reset/reset.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageStockExchangeComponent } from './manage-stock-exchange/manage-stock-exchange.component';
import { AddIpoComponent } from './add-ipo/add-ipo.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UploadDpComponent } from './upload-dp/upload-dp.component';
import { UpdateStockExchangeComponent } from './update-stock-exchange/update-stock-exchange.component';
import { DisplayIposComponent } from './display-ipos/display-ipos.component';
import { ViewIposComponent } from './view-ipos/view-ipos.component';
import { ValidateComponent } from './validate/validate.component';
import { LogoutComponent } from './logout/logout.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LandingPageComponent,
    AdminPageComponent,
    UserPageComponent,
    // AddCompanyComponent,
    AddStockExchangeComponent,
    DeactivateCompanyComponent,
    UpdateCompanyComponent,
    ResetComponent,
    UpdateIpoComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageStockExchangeComponent,
    AddIpoComponent,
    DisplayUsersComponent,
    UpdateUserComponent,
    ChangePasswordComponent,
    ResetCodeComponent,
    ResetPasswordComponent,
    UserProfileComponent,
    UploadDpComponent,
    UpdateStockExchangeComponent,
    DisplayIposComponent,
    ViewIposComponent,
    ValidateComponent,
    LogoutComponent,
    AddStockPriceComponent,
    AddCompanyComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
