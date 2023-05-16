import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class WelcomeComponent implements OnInit {
  pageTitle: string = 'Welcome to Hillside';

  ngOnInit(): void {}
}
