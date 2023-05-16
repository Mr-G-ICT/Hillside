import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/api/message.service';
import { ContactFormData } from './contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactFormComponent implements OnInit {
  pageTitle: string = 'Contact Us';
  enquiryTypes: string[] = ['test', 'test2'];
  forbiddenNames: string[] = ['drop table', 'delete'];
  contactForm!: FormGroup;

  allMessages: ContactFormData[] = [];
  sub!: Subscription;
  errorMessage: string = '';

  postError = false;
  postErrorMessage = '';

  //dataservice is the issue
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          this.forbiddenNamesValidator.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      enquiryType: new FormControl(null, Validators.required),
      contactMessage: new FormControl(null, Validators.required),
    });

    //subscribe to the method:
    //TODO: make this into a resolver
    this.sub = this.messageService.getMessages().subscribe({
      next: (data) => {
        console.log(data);
        this.allMessages = data;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  onHttpError(errorResponse: any) {
    console.log('error', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit() {
    //we get the whole form then we can start messing with all the values inside it
    console.log(this.contactForm);
    const submissionDate = new Date();
    const contactSubmission: ContactFormData = new ContactFormData(
      this.contactForm.value['name'],
      this.contactForm.value['email'],
      this.contactForm.value['enquiryType'],
      this.contactForm.value['contactMessage'],
      submissionDate.toISOString()
    );

    console.log('in onSubmit: ', this.contactForm.valid);
    if (this.contactForm.valid) {
      this.messageService.postContactForm(contactSubmission).subscribe({
        next: (result) => {
          console.log('success', result);
        },
        error: (error) => this.onHttpError(error),
      });
    } else {
      this.postError = true;
      this.postErrorMessage = 'please fix the above errors';
    }
  }

  //custom validator
  forbiddenNamesValidator(
    control: FormControl
  ): { [s: string]: boolean } | null {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
