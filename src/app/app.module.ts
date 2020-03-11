import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartComponent } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './common/login-form/login-form.component';
import { RegisterFormComponent } from './common/register-form/register-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';
// import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { ResetComponent } from './common/reset/reset.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageStockExchangeComponent } from './admin/manage-stock-exchange/manage-stock-exchange.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { DisplayUsersComponent } from './admin/display-users/display-users.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ChangePasswordComponent } from './common/change-password/change-password.component';
import { ResetCodeComponent } from './common/reset-code/reset-code.component';
import { ResetPasswordComponent } from './common/reset-password/reset-password.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UploadDpComponent } from './user/upload-dp/upload-dp.component';
import { UpdateStockExchangeComponent } from './admin/update-stock-exchange/update-stock-exchange.component';
import { DisplayIposComponent } from './admin/display-ipos/display-ipos.component';
import { ViewIposComponent } from './user/view-ipos/view-ipos.component';
import { ValidateComponent } from './user/validate/validate.component';
import { LogoutComponent } from './common/logout/logout.component';
import { AddStockPriceComponent } from './admin/add-stock-price/add-stock-price.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { SearchComponent } from './user/search/search.component';
import { ChartsComponent } from './user/charts/charts.component';
import { HttpInterceptorService } from 'src/services/http-interceptor.service';
import { CompareCompanyComponent } from './user/compare-company/compare-company.component';
import { CompareSectorComponent } from './user/compare-sector/compare-sector.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LandingPageComponent,
    AdminPageComponent,
    UserPageComponent,
    AddStockExchangeComponent,
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
    ContactUsComponent,
    SearchComponent,
    HighchartsChartComponent,
    ChartsComponent,
    CompareCompanyComponent,
    CompareSectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
