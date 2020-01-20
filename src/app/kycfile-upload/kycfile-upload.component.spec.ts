import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCFileUploadComponent } from './kycfile-upload.component';

describe('FileUploadComponent', () => {
  let component: KYCFileUploadComponent;
  let fixture: ComponentFixture<KYCFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KYCFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
