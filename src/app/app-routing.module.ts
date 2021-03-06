import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StoreListComponent } from './store-list/store-list.component';
import { AuthGuard } from './gaurds/auth';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { InputModalComponent } from './input-modal/input-modal.component';
import { KYCFileUploadComponent } from './kycfile-upload/kycfile-upload.component';
import { ViewkycdocComponent } from './viewkycdoc/viewkycdoc.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'inputModal', component: InputModalComponent, canActivate: [AuthGuard]  },
  { path: 'KYCupload', component: KYCFileUploadComponent, canActivate: [AuthGuard]  },
  { path: 'ViewKYCdoc', component: ViewkycdocComponent, canActivate: [AuthGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'stores/:id', component: StoreDetailsComponent, canActivate: [AuthGuard]  },
  { path: 'stores', component: StoreListComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
