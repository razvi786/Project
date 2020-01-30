import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDpComponent } from './upload-dp.component';

describe('UploadDpComponent', () => {
  let component: UploadDpComponent;
  let fixture: ComponentFixture<UploadDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
