import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { StatementsComponent } from './Components/statements/statements.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './Components/profile/profile.component';
import { AddAccountComponent } from './Components/add-account/add-account.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    TransactionComponent,
    DashboardComponent,
    SidebarComponent,
    StatementsComponent,
    ProfileComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
