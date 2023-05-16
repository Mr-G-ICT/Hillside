export class ContactFormData {
  name: string;
  email: string;
  enquiryType: string;
  contactMessage: string;
  datePosted: string;

  constructor(
    name: string,
    email: string,
    enquiryType: string,
    contactMessage: string,
    datePosted: string
  ) {
    this.name = name;
    this.email = email;
    this.enquiryType = enquiryType;
    this.contactMessage = contactMessage;
    this.datePosted = datePosted;
  }
}
