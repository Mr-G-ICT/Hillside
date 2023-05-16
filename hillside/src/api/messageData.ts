import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ContactFormData } from '../app/contact/contact.model';

export class InMemoryDb implements InMemoryDbService {
  constructor() {}
  createDb(): { messages: ContactFormData[] } {
    const messages: ContactFormData[] = [
      {
        name: 'bob Smith',
        email: 'bob@smith.com',
        enquiryType: 'test',
        contactMessage: 'this is a test',
        datePosted: '23/05/1979',
      },
    ];
    return { messages };
  }
}
