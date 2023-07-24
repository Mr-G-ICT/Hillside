import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ContactFormData } from '../app/contact/contact.model';
import { IUser } from './user';
import { IEvent } from './event';

export class InMemoryDb implements InMemoryDbService {
  constructor() {}
  createDb(): {
    /*messages: ContactFormData[];*/ users: IUser[];
    events: IEvent[];
  } {
    /*const messages: ContactFormData[] = [
      {
        name: 'bob Smith',
        email: 'bob@smith.com',
        enquiryType: 'test',
        contactMessage: 'this is a test',
        datePosted: '23/05/1979',
      },
    ];*/
    const users: IUser[] = [
      {
        userId: 1,
        userName: 'admin',
        isAdmin: true,
        passWord: 'test',
      },
      {
        userId: 2,
        userName: 'myuser',
        isAdmin: false,
        passWord: 'test',
      },
    ];
    const events: IEvent[] = [
      {
        eventId: 1,
        eventName: 'test Event',
        eventDesc: 'this is a test event',
        eventDate: '1979-05-23',
      },
      {
        eventId: 2,
        eventName: 'test Event 2',
        eventDesc: 'this is a test event 2',
        eventDate: '1979-05-22',
      },
    ];
    return { /*messages,*/ users, events };
  }
}
