import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// importing this here as we are going to need it all over the place
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//only one database tables in here, messages, need to rename
import { InMemoryDb } from '../api/data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { WelcomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { EventListComponent } from './events/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactFormComponent,
    EventListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    InMemoryWebApiModule.forRoot(InMemoryDb),
    //below is the ones i've made
    LayoutModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
