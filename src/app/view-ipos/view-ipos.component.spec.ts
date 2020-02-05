import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIposComponent } from './view-ipos.component';

describe('ViewIposComponent', () => {
  let component: ViewIposComponent;
  let fixture: ComponentFixture<ViewIposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
