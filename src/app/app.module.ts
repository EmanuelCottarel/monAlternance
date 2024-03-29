import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContainerComponent } from './container/container.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationFiltersComponent } from './application-filters/application-filters.component';
import {CookieService} from "ngx-cookie-service";
import {AuthInterceptor} from "./_Interceptors/auth.interceptor";
import {JwtHelperService, JWT_OPTIONS} from "@auth0/angular-jwt";
import { ReminderComponent } from './reminder/reminder.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { PhoneNumberPipe } from './_Pipes/phone-number.pipe';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {RequestInterceptor} from "./_Interceptors/request.interceptor";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { ShowApplicationDialogueComponent } from './show-application-dialogue/show-application-dialogue.component';
import { StatisticComponent } from './statistic/statistic.component';
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarComponent, FullCalendarModule} from "@fullcalendar/angular";


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DashboardComponent,
    NavigationComponent,
    ContainerComponent,
    ApplicationFormComponent,
    ApplicationListComponent,
    ApplicationFiltersComponent,
    ReminderComponent,
    SettingsComponent,
    ProfileComponent,
    PhoneNumberPipe,
    ShowApplicationDialogueComponent,
    StatisticComponent,
    CalendarComponent,
  ],
            imports: [
              BrowserModule,
              FontAwesomeModule,
              AppRoutingModule,
              FormsModule,
              HttpClientModule,
              BrowserAnimationsModule,
              ToastrModule.forRoot(),
              ReactiveFormsModule,
              BrowserAnimationsModule,
              CdkDropList,
              CdkDrag,
              MatTabsModule,
              MatButtonModule,
              MatDialogModule,
              FullCalendarModule

            ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
