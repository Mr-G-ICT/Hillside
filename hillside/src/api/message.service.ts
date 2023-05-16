import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, tap, catchError, throwError } from 'rxjs';
import { ContactFormData } from '../app/contact/contact.model';

@Injectable({
  providedIn: 'root',
})
//this is my crud service incomplete, currently not working.
export class MessageService {
  SERVER_URL: string = 'api/messages';
  constructor(private httpClient: HttpClient) {}
  messagesChanged = new Subject<ContactFormData[]>();

  getMessages(): Observable<ContactFormData[]> {
    console.log('in here');
    return this.httpClient.get<ContactFormData[]>(this.SERVER_URL).pipe(
      tap((data) => console.log('All :', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  postContactForm(contactData: ContactFormData): Observable<any> {
    //set up the post command for the HTTP client.
    return this.httpClient.post(
      'https://www.putsreq.com/MIcWHfg2SQIa2a9MJIzX',
      contactData
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to soeme remote logging infrastructure
    // intead of just logging it ot the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      //a client-side or netwoirk error occured. Hangle it accordingly.
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      //the backend returened and uncucessful response code.
      //the response bodsy may contain clues as to what when wrong,
      errorMessage = `server retuned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
