import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './Components/add-account/add-account.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { StatementsComponent } from './Components/statements/statements.component';
import { TransactionComponent } from './Components/transaction/transaction.component';

const routes: Routes = [
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'add-account',component:AddAccountComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'transaction', component:TransactionComponent
  },
  {
    path: 'statements', component:StatementsComponent
  },
  {
    path: 'sidebar', component:SidebarComponent
  },
  {
    path: 'dashboard', component:DashboardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegistrationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
