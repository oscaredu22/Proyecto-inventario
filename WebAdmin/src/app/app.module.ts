import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DeleteComponent} from './services/delete/delete.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelModule} from 'primeng/panel';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ToastModule} from 'primeng/toast';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DeleteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    PasswordModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    KeyFilterModule,
    ToastModule,
    NoopAnimationsModule,
    DropdownModule,
    CalendarModule,
    ProgressSpinnerModule,
    CardModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
