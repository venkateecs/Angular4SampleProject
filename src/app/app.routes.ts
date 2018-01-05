import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmpSelectedViewComponent } from './emp-selected-view/emp-selected-view.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {OverviewTableComponent} from './overview-table/overview-table.component';
import {AuthGuard} from './auth.guard';
export const routes: Routes = [
  { path: 'EmpAdd', component: EmployeeAddComponent },
  { path: 'EmpView', component: EmployeeViewComponent },
  { path: 'EmpViewSelect/:id', component: EmpSelectedViewComponent },
  { path:'login',component:LoginComponent},
  {path:'overview',component:OverviewTableComponent},
  { path:'home/:name',component:HomeComponent,canActivate:[AuthGuard]},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
