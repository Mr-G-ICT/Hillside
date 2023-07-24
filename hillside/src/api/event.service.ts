import { Injectable } from '@angular/core';
import { IEvent } from './event';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventUrl = 'api/events';
  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.eventUrl).pipe(
      tap((data) => console.log('All :', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getOneEvent(eventId: number): Observable<IEvent> {
    if (eventId === 0) {
      return of(this.initializeEvent());
    }
    const options = { params: new HttpParams().set('eventId', eventId) };
    return this.http.get<IEvent>(this.eventUrl, options).pipe(
      tap((data) => console.log('got one:', JSON.stringify(data))),
      catchError(this.handleError)
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

  private initializeEvent(): IEvent {
    // Return an initialized object
    return {
      eventId: 0,
      eventName: '',
      eventDesc: '',
      eventDate: '',
    };
  }
}
