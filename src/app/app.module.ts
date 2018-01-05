import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { routing } from './app.routes';
import { EmpDataShowComponent } from './emp-data-show/emp-data-show.component';
import {empDataService} from './empDataService';
import { EmpSelectedViewComponent } from './emp-selected-view/emp-selected-view.component';
import {sibblingCommunication} from './sibblingCompCommunication';
import {empModelService} from './empModelService';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './auth.guard';
import { LoginChildComponent } from './login-child/login-child.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { OverviewchildComponent } from './overviewchild/overviewchild.component';
import {OrderrByPipe } from './orderByPipe';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeViewComponent,
    EmpDataShowComponent,
    EmpSelectedViewComponent,
    CounterComponent,
    LoginComponent,
    HomeComponent,
    LoginChildComponent,
    OverviewTableComponent,
    OverviewchildComponent,
	OrderrByPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    Ng2OrderModule
  ],
  providers: [empDataService,sibblingCommunication,empModelService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
