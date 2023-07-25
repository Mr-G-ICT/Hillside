import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/api/event';

@Component({
  selector: 'events',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  pageTitle: string = 'Events';
  eventList: IEvent[] = [];

  ngOnInit(): void {
    const resolvedData: IEvent[] =
      this.activatedRoute.snapshot.data['resolvedEventList'];
    throw new Error('Method not implemented.');
  }
}
