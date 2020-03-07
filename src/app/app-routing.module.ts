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
import { AuthGuard } from '../guards/auth.guard';
import { ViewIposComponent } from './view-ipos/view-ipos.component';
import { ValidateComponent } from './validate/validate.component';
import { LogoutComponent } from './logout/logout.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminGuard } from 'src/guards/admin.guard';
import { LoginGuard } from 'src/guards/login.guard';
import { LogoutGuard } from 'src/guards/logout.guard';
import { SearchComponent } from './search/search.component';
import { ChartsComponent } from './charts/charts.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'admin',component:AdminPageComponent,canActivate:[AdminGuard]},
  {path:'user',component:UserPageComponent,canActivate:[LoginGuard]},
  {path:'display-users',component:DisplayUsersComponent,canActivate:[AdminGuard]},
  {path:'add-company' ,component: AddCompanyComponent,canActivate:[AdminGuard]},
  {path:'add-stock-exchange' ,component: AddStockExchangeComponent,canActivate:[AdminGuard]},
  {path:'add-ipo' ,component: AddIpoComponent,canActivate:[AdminGuard]},
  {path:'deactivate-company' ,component: DeactivateCompanyComponent,canActivate:[AdminGuard]},
  {path:'reset' ,component: ResetComponent,canActivate:[LogoutGuard] },
  {path:'update-ipo' ,component: UpdateIpoComponent,canActivate:[AdminGuard]},
  {path:'update-company' ,component: UpdateCompanyComponent,canActivate:[AdminGuard]},
  {path:'import-data' ,component: ImportDataComponent,canActivate:[AdminGuard]},
  {path:'manage-company' ,component: ManageCompanyComponent,canActivate:[AdminGuard]},
  {path:'manage-stock-exchange' ,component: ManageStockExchangeComponent,canActivate:[AdminGuard]},
  {path:'update-user',component: UpdateUserComponent,canActivate:[LoginGuard]},
  {path:'change-password',component: ChangePasswordComponent,canActivate:[LoginGuard]},
  {path:'reset-code',component:ResetCodeComponent,canActivate:[LogoutGuard]},
  {path:'reset-password',component:ResetPasswordComponent,canActivate:[LoginGuard]},
  {path:'user-profile',component:UserProfileComponent,canActivate:[LoginGuard]},
  {path:'upload-dp',component:UploadDpComponent,canActivate:[LoginGuard]},
  {path:'update-stock-exchange',component:UpdateStockExchangeComponent,canActivate:[AdminGuard]},
  {path:'display-ipos',component:DisplayIposComponent,canActivate:[AdminGuard]},
  {path:'view-ipos',component:ViewIposComponent,canActivate:[LoginGuard]},
  {path:'user/activate',component:ValidateComponent,canActivate:[LogoutGuard]},
  {path:'logout',component:LogoutComponent},
  {path:'add-stock-price',component:AddStockPriceComponent,canActivate:[AdminGuard]},
  {path:'contact-us',component:ContactUsComponent},
  {path:'search',component:SearchComponent},
  {path:'charts',component:ChartsComponent},
  {path:'test',component:TestComponent},

  {path:'**',component:LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
