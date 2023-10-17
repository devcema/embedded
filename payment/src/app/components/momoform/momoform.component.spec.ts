import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomoformComponent } from './momoform.component';

describe('MomoformComponent', () => {
  let component: MomoformComponent;
  let fixture: ComponentFixture<MomoformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomoformComponent]
    });
    fixture = TestBed.createComponent(MomoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
