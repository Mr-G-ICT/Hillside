import { TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './home.component';

describe('WelcomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
    }).compileComponents();
  });

  it(`should have as title 'Welcome to Hillside'`, () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('Welcome to Hillside');
  });
});
