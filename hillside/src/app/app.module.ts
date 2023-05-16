import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// importing this here as we are going to need it all over the place
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//only one database tables in here, messages, need to rename
import { InMemoryDb } from '../api/messageData';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { WelcomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, ContactFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
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
