import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './contact/contact.component';
import { ViewMessagesComponent } from './contact/viewMessages/viewMessages.component';
import { WelcomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//i need to export this s i can test it
export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'messages', component: ViewMessagesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  //if the path is not found. for any other path, go here
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
