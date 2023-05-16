import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/api/auth.service';
import { LoginComponent } from './login.component';

let userServiceStub: Partial<AuthService>;

describe('LoginComponent', () => {
  beforeEach(async () => {
    // stub UserService for test purposes
    userServiceStub = {
      isLoggedIn: true,
      currentUser: { userId: 1, userName: 'Test User', isAdmin: false },
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      //need to build teh service before this passes
      //this is a test double, so nothign is messed with
      providers: [{ provide: AuthService, useValue: userServiceStub }],
    }).compileComponents();

    //set up the module to be tested before we start
    //we know it renders due to headerComponent
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;

    //USerService for the root injector
    const userService = TestBed.inject(AuthService);
  });

  //don't need to test the compoonent is created as that is done in the hillside bit.

  //test it should display this if logged in is true
  it('should display welcome if user is logged in', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent)
      .withContext('"Welcome ..."')
      .toContain('Welcome');
    expect(compiled.querySelector('a')?.textContent)
      .withContext('expected namee')
      .toContain('Test User');
  });

  it('should show login if not logged in', () => {
    (userServiceStub.isLoggedIn as boolean) = false;
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Log In');
  });
});
