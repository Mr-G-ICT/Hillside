import {
  ComponentFixtureAutoDetect,
  TestBed,
  fakeAsync,
} from '@angular/core/testing';
import { DarkModeSlider } from './darkmode.component';
import { By } from '@angular/platform-browser';

describe('DarkModeSliderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkModeSlider],
    }).compileComponents();
  });
  //this is a test for a checkbox
  it(`should change colour based on slider`, () => {
    const fixture = TestBed.createComponent(DarkModeSlider);
    fixture.detectChanges();
    const sliderButton: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    expect(sliderButton.checked).toBeFalsy();
    let event = new MouseEvent('click');
    sliderButton.dispatchEvent(event);

    expect(sliderButton.checked).toBeTruthy();
  });
});
