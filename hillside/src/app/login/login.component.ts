import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

//defined components to import.
import { AuthService } from 'src/api/auth.service';
//do i need this?
import { IUser } from '../../api/user';
import { first } from 'rxjs';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pageTitle: string = 'Login';
  postErrorMessage: string = '';
  postError: boolean = false;

  currentLoginSettings: IUser = {
    userId: 0,
    userName: '',
    isAdmin: false,
    passWord: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onBlur(field: NgModel) {
    console.log('in onBlur', field.valid);
  }

  onSubmit(loginForm: NgForm) {
    console.log('in submit', loginForm.valid);

    if (loginForm && loginForm.valid) {
      const userName = loginForm.value.userName;
      const password = loginForm.value.password;
      this.authService
        .loginTest(userName, password)
        .pipe(first())
        .subscribe({
          next: () => {
            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
            } else {
              //don't have an admin section yet, so i'll redirect to home
              this.router.navigate(['/welcome']);
            }
          },
        });

      //this.authService.login(userName, password);

      // //navigate to the page i want following login.
      // if (this.authService.redirectUrl) {
      //   this.router.navigateByUrl(this.authService.redirectUrl);
      // } else {
      //   //don't have an admin section yet, so i'll redirect to home
      //   this.router.navigate(['/welcome']);
      // }
    } else {
      this.postErrorMessage = 'please enter a valid username and password.';
    }
  }
}
