import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddserviceproviderComponent } from './addserviceprovider/addserviceprovider.component';
import { EditserviceproviderComponent } from './editserviceprovider/editserviceprovider.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginfailComponent } from './loginfail/loginfail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ServiceproviderdetailComponent } from './serviceproviderdetail/serviceproviderdetail.component';
import { ServiceproviderlistComponent } from './serviceproviderlist/serviceproviderlist.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'serviceproviderlist', component: ServiceproviderlistComponent},
  { path: 'serviceproviderdetail', component: ServiceproviderdetailComponent},
  { path: 'editserviceprovider', component: EditserviceproviderComponent},
  { path: 'addserviceprovider', component: AddserviceproviderComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'loginfail', component: LoginfailComponent },
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: "**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  LoginComponent,
  PagenotfoundComponent
]