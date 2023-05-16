import { TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact.component';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('Contact Form Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ContactFormComponent],
      //commented out as this is not implemented at the moment
      // providers: [{provide: ContactService, useValue: contactService }]
    }).compileComponents();
  });

  //we need to fake the contact service, so we need to fake it.
  //do we need this, as all the info is going to be submitted anyways, so not needed
  // const contactFormService:
  //   Pick<contactFormService, keyof contactFormService> = {
  //   isName
  // }

  it(`should have as title 'Contact Us'`, () => {
    const fixture = TestBed.createComponent(ContactFormComponent);
    const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('Contact Us');
  });

  it('should create a form called contactform'),
    () => {
      const fixture = TestBed.createComponent(ContactFormComponent);
      const app = fixture.componentInstance;
      app.ngOnInit();
    };
});
