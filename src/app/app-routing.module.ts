import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './gaurds/auth';
import { StoreDetailsComponent } from './store-details/store-details.component';


const routes: Routes = [
  { path: 'home/:id', component: StoreDetailsComponent, canActivate: [AuthGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
