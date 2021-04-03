import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginfailComponent } from './loginfail/loginfail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomeComponent } from './home/home.component';
import { ServiceproviderlistComponent } from './serviceproviderlist/serviceproviderlist.component';
import { ServiceproviderdetailComponent } from './serviceproviderdetail/serviceproviderdetail.component';
import { AddserviceproviderComponent } from './addserviceprovider/addserviceprovider.component';
import { EditserviceproviderComponent } from './editserviceprovider/editserviceprovider.component';
import { AddcontractComponent } from './addcontract/addcontract.component';
import { EditcontractComponent } from './editcontract/editcontract.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    LoginfailComponent,
    ResetpasswordComponent,
    HomeComponent,
    ServiceproviderlistComponent,
    ServiceproviderdetailComponent,
    AddserviceproviderComponent,
    EditserviceproviderComponent,
    AddcontractComponent,
    EditcontractComponent,
    AddnoteComponent,
    EditnoteComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
