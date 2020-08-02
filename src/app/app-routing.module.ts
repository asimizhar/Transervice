import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BookingComponent } from './modules/booking/booking.component';
import { BookingFormComponent } from './modules/booking-form/booking-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './modules/review/review.component';
import { TransportFormComponent } from './modules/transport-form/transport-form.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path:'',
    component: DashboardComponent,
  },{
    path:'orders',
    component: BookingComponent
  },
  {
    path:'orders/:id',
    component: BookingFormComponent
  },
  {
    path:'review',
    component: ReviewComponent
  },
  {
    path:'review/:id',
    component: TransportFormComponent
  },]
},
{path:'register',component:RegistrationComponent},
{path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
