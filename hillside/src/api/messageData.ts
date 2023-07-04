import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ContactFormData } from '../app/contact/contact.model';
import { IUser } from './user';

export class InMemoryDb implements InMemoryDbService {
  constructor() {}
  createDb(): { /*messages: ContactFormData[];*/ users: IUser[] } {
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
    return { /*messages,*/ users };
  }
}
