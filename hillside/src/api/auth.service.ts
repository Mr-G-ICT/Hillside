import { Injectable } from '@angular/core';
import { User } from './user';

//import { MessageService } from '../app/messages/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'api/users.json';
  currentUser?: User | undefined;
  redirectUrl: string = '';

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  //constructor(private messageService: MessageService) {}

  login(userName: string, password: string): void {
    if (!userName || !password) {
      console.log('please enter a username or password');
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        userId: 1,
        userName,
        isAdmin: true,
      };
      //this.messageService.addMessage('admin login');
      return;
    }
    this.currentUser = {
      userId: 2,
      userName,
      isAdmin: false,
    };
    // this.messageService.addMessage(
    //   `user: ${this.currentUser.userName} logged in`
    // );
  }

  logout(): void {
    this.currentUser = undefined;
  }
}
