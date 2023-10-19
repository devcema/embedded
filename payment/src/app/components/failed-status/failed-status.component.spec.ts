import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedStatusComponent } from './failed-status.component';

describe('FailedStatusComponent', () => {
  let component: FailedStatusComponent;
  let fixture: ComponentFixture<FailedStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailedStatusComponent]
    });
    fixture = TestBed.createComponent(FailedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
