import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIposComponent } from './display-ipos.component';

describe('DisplayIposComponent', () => {
  let component: DisplayIposComponent;
  let fixture: ComponentFixture<DisplayIposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayIposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
