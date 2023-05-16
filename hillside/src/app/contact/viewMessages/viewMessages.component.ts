import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewMessages',
  templateUrl: './viewMessages.component.html',
  styleUrls: ['./viewMessages.component.scss'],
})
export class ViewMessagesComponent implements OnInit {
  pageTitle: string = 'My Messages';
  constructor() {}

  ngOnInit(): void {}
}
