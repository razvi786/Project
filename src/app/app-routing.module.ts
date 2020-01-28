import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { DeactivateCompanyComponent } from './deactivate-company/deactivate-company.component';
import { ResetComponent } from './reset/reset.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageStockExchangeComponent } from './manage-stock-exchange/manage-stock-exchange.component';
import { AddIpoComponent } from './add-ipo/add-ipo.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';


const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'',component:LandingPageComponent},
  {path:'admin',component:AdminPageComponent},
  {path:'user',component:UserPageComponent},
  {path:'display-users',component:DisplayUsersComponent},
  {path:'add-company' ,component: AddCompanyComponent},
  {path:'add-stock-exchange' ,component: AddStockExchangeComponent},
  {path:'add-ipo' ,component: AddIpoComponent},
  {path:'deactivate-company' ,component: DeactivateCompanyComponent},
  {path:'reset' ,component: ResetComponent },
  {path:'update-ipo' ,component: UpdateIpoComponent},
  {path:'update-company' ,component: UpdateCompanyComponent},
  {path:'import-data' ,component: ImportDataComponent},
  {path:'manage-company' ,component: ManageCompanyComponent },
  {path:'manage-stock-exchange' ,component: ManageStockExchangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
