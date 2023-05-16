import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ContactFormComponent } from './contact.component';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MessageService } from 'src/api/message.service';

const requiredFields = ['name', 'email', 'enquiryType', 'contactMessage'];

describe('Contact Form Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ContactFormComponent],
    }).compileComponents();
  });

  let fixture: ComponentFixture<ContactFormComponent>;
  let signupService: jasmine.SpyObj<MessageService>;

  //set up the contact service test runner, not built the service up yet
  const setup = async (
    signupServiceReturnValues?: jasmine.SpyObjMethodNames<MessageService>,
  ) => {
    signupService = jasmine.createSpyObj<MessageService>('MessageService', {
    });

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

it('should submit the form successfully', fakeAsync(async () => {
  await setup();
}))
