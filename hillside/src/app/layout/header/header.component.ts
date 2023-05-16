import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  clickLink(arg0: string) {
    throw new Error('Method not implemented.');
  }
  siteTitle: string = 'Hillside Methodist Church';

  constructor() {}

  ngOnInit(): void {}
}
