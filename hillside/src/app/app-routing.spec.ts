import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/home.component';
import { AppRoutingModule, routes } from './app-routing.module';

import { LayoutModule } from './layout/layout.module';

describe('Routing Component', () => {
  let mockRouter = { navigate: jasmine.createSpyObj('Router', ['navigate']) };

  let welcomeComponent: WelcomeComponent;
  let appcomp: AppComponent;
  let location: Location;
  let objRouter: Router;
  let fixture: ComponentFixture<WelcomeComponent>;
  let appFixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        AppRoutingModule,
        LayoutModule,
      ],
      providers: [{ provide: Router, useValue: mockRouter }],
      declarations: [AppComponent, WelcomeComponent],
    }).compileComponents();

    objRouter = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(WelcomeComponent);
    welcomeComponent = fixture.componentInstance;

    fixture.detectChanges();
    objRouter.initialNavigation();
  });

  it('should find the default route', async () => {
    let fixture = TestBed.createComponent(AppComponent);
    let appcomponent = fixture.debugElement.componentInstance;
    appcomponent.detectChanges();
    expect(location.path()).toBe('/welcome');
  });
});

// it('should navigate to the homepage', async () => {
//   let fixture = TestBed.createComponent(HeaderComponent);
//   fixture.detectChanges();
//   let component: HeaderComponent = fixture.componentInstance;
//   component.clickLink('contact');
//   objRouter.navigate(['/contact']).then(() => {
//     expect(location.path()).toBe('/contact');
//   }
//expect(mockRouter.navigate).toHaveBeenCalledWith(['/welcome']);
