import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './common/register-form/register-form.component';
import { LoginFormComponent } from './common/login-form/login-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { DisplayUsersComponent } from './admin/display-users/display-users.component';
// import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { ResetComponent } from './common/reset/reset.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageStockExchangeComponent } from './admin/manage-stock-exchange/manage-stock-exchange.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
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
import { AdminGuard } from 'src/guards/admin.guard';
import { LoginGuard } from 'src/guards/login.guard';
import { LogoutGuard } from 'src/guards/logout.guard';
import { SearchComponent } from './user/search/search.component';
import { ChartsComponent } from './user/charts/charts.component';
import { CompareCompanyComponent } from './user/compare-company/compare-company.component';
import { CompareSectorComponent } from './user/compare-sector/compare-sector.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: 'user', component: UserPageComponent, canActivate: [LoginGuard] },
  { path: 'display-users', component: DisplayUsersComponent, canActivate: [AdminGuard] },
  { path: 'add-company', component: AddCompanyComponent, canActivate: [AdminGuard] },
  { path: 'add-stock-exchange', component: AddStockExchangeComponent, canActivate: [AdminGuard] },
  { path: 'add-ipo', component: AddIpoComponent, canActivate: [AdminGuard] },
  { path: 'reset', component: ResetComponent, canActivate: [LogoutGuard] },
  { path: 'update-ipo/:id', component: UpdateIpoComponent, canActivate: [AdminGuard] },
  { path: 'update-company', component: UpdateCompanyComponent, canActivate: [AdminGuard] },
  { path: 'import-data', component: ImportDataComponent, canActivate: [AdminGuard] },
  { path: 'manage-company', component: ManageCompanyComponent, canActivate: [AdminGuard] },
  { path: 'manage-stock-exchange', component: ManageStockExchangeComponent, canActivate: [AdminGuard] },
  { path: 'update-user/:id', component: UpdateUserComponent, canActivate: [LoginGuard] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [LoginGuard] },
  { path: 'reset-code', component: ResetCodeComponent, canActivate: [LogoutGuard] },
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [LoginGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [LoginGuard] },
  { path: 'upload-dp', component: UploadDpComponent, canActivate: [LoginGuard] },
  { path: 'update-stock-exchange/:id', component: UpdateStockExchangeComponent, canActivate: [AdminGuard] },
  { path: 'display-ipos', component: DisplayIposComponent, canActivate: [AdminGuard] },
  { path: 'view-ipos', component: ViewIposComponent, canActivate: [LoginGuard] },
  { path: 'user/activate', component: ValidateComponent, canActivate: [LogoutGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'add-stock-price', component: AddStockPriceComponent, canActivate: [AdminGuard] },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'charts', component: ChartsComponent },
  {path: 'compare-company',component: CompareCompanyComponent},
  {path:'compare-sector',component: CompareSectorComponent},
  {path: 'update-profile',component:UpdateProfileComponent},

  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
