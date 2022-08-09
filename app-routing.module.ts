import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:RegisterComponent},
  {path:'displaydata',component:DisplaydataComponent},
  {path:'register',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
