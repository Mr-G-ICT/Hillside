import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DarkModeSlider } from './darkModeSlider/darkmode.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LoginComponent, DarkModeSlider],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
