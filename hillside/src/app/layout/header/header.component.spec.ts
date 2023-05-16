import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { LoginComponent } from '../login/login.component';
import { DarkModeSlider } from '../darkModeSlider/darkmode.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent, LoginComponent, DarkModeSlider],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  });

  it(`should have as title 'hillside'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.siteTitle).toEqual('Hillside Methodist Church');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hillside Methodist Church'
    );
  });

  it('should render the login component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });

  it('should render the darkmode component', () => {
    const fixture = TestBed.createComponent(DarkModeSlider);
    const darkmode = fixture.componentInstance;
    expect(darkmode).toBeTruthy();
  });
});
