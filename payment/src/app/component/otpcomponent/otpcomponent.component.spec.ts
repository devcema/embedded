import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpcomponentComponent } from './otpcomponent.component';

describe('OtpcomponentComponent', () => {
  let component: OtpcomponentComponent;
  let fixture: ComponentFixture<OtpcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpcomponentComponent]
    });
    fixture = TestBed.createComponent(OtpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
