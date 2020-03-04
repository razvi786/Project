import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
// import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { DeactivateCompanyComponent } from './deactivate-company/deactivate-company.component';
import { ResetComponent } from './reset/reset.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageStockExchangeComponent } from './manage-stock-exchange/manage-stock-exchange.component';
import { AddIpoComponent } from './add-ipo/add-ipo.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UploadDpComponent } from './upload-dp/upload-dp.component';
import { UpdateStockExchangeComponent } from './update-stock-exchange/update-stock-exchange.component';
import { DisplayIposComponent } from './display-ipos/display-ipos.component';
import { AuthGuard } from './auth.guard';
import { ViewIposComponent } from './view-ipos/view-ipos.component';
import { ValidateComponent } from './validate/validate.component';
import { LogoutComponent } from './logout/logout.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';


const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'admin',component:AdminPageComponent,canActivate:[AuthGuard]},
  {path:'user',component:UserPageComponent,canActivate:[AuthGuard]},
  {path:'display-users',component:DisplayUsersComponent,canActivate:[AuthGuard]},
  // {path:'add-company' ,component: AddCompanyComponent,canActivate:[AuthGuard]},
  {path:'add-stock-exchange' ,component: AddStockExchangeComponent,canActivate:[AuthGuard]},
  {path:'add-ipo' ,component: AddIpoComponent,canActivate:[AuthGuard]},
  {path:'deactivate-company' ,component: DeactivateCompanyComponent,canActivate:[AuthGuard]},
  {path:'reset' ,component: ResetComponent },
  {path:'update-ipo' ,component: UpdateIpoComponent,canActivate:[AuthGuard]},
  {path:'update-company' ,component: UpdateCompanyComponent,canActivate:[AuthGuard]},
  {path:'import-data' ,component: ImportDataComponent,canActivate:[AuthGuard]},
  {path:'manage-company' ,component: ManageCompanyComponent,canActivate:[AuthGuard]},
  {path:'manage-stock-exchange' ,component: ManageStockExchangeComponent,canActivate:[AuthGuard]},
  {path:'update-user',component: UpdateUserComponent,canActivate:[AuthGuard]},
  {path:'change-password',component: ChangePasswordComponent,canActivate:[AuthGuard]},
  {path:'reset-code',component:ResetCodeComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'upload-dp',component:UploadDpComponent,canActivate:[AuthGuard]},
  {path:'update-stock-exchange',component:UpdateStockExchangeComponent,canActivate:[AuthGuard]},
  {path:'display-ipos',component:DisplayIposComponent,canActivate:[AuthGuard]},
  {path:'view-ipos',component:ViewIposComponent,canActivate:[AuthGuard]},
  {path:'user/activate',component:ValidateComponent},
  {path:'logout',component:LogoutComponent},
  {path:'add-stock-price',component:AddStockPriceComponent},

  {path:'**',component:LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
