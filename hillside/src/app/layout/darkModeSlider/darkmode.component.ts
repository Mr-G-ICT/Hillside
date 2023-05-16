import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dark-mode-slider',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss'],
})
export class DarkModeSlider implements OnInit {
  siteTitle: string = 'Light/Dark mode';

  constructor() {}

  ngOnInit(): void {}

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
