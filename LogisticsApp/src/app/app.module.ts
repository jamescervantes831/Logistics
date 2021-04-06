import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { ContactsComponent } from './contacts/contacts.component';
import { NotesComponent } from './notes/notes.component';

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
    AddcontactComponent,
    EditcontactComponent,
    AddnoteComponent,
    EditnoteComponent,
    PagenotfoundComponent,
    ContactsComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
