import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';
import { BehaviorSubject, Observable, map, throwError } from 'rxjs';

//import { MessageService } from '../app/messages/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'api/users/';
  currentUser?: IUser | undefined;
  redirectUrl: string = '';

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  private userSubject: BehaviorSubject<IUser | null>;
  public user: Observable<IUser | null>;

  constructor(
    private http: HttpClient /*private messageService: MessageService*/
  ) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  loginTest(username: string, password: string) {
    return this.http.post<IUser>(this.usersUrl, { username, password }).pipe(
      map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  login(userName: string, password: string): void {
    console.log(this.loginTest(userName, password));
    if (!userName || !password) {
      console.log('please enter a username or password');
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        userId: 1,
        userName,
        isAdmin: true,
        passWord: '',
      };
      //this.messageService.addMessage('admin login');
      return;
    }
    this.currentUser = {
      userId: 2,
      userName,
      isAdmin: false,
      passWord: '',
    };
    // this.messageService.addMessage(
    //   `user: ${this.currentUser.userName} logged in`
    // );
  }

  logout(): void {
    this.currentUser = undefined;
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
    console.error('ouch' + errorMessage);
    return throwError(() => errorMessage);
  }
}
