const fixture = TestBed.createComponent(WelcomeComponent);
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { WelcomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LayoutModule],
      declarations: [AppComponent, WelcomeComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.componentInstance;
    expect(header).toBeTruthy();
  });

  it('should render the welcome component', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const header = fixture.componentInstance;
    expect(header).toBeTruthy();
  });
});
