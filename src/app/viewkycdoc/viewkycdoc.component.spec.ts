import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewkycdocComponent } from './viewkycdoc.component';

describe('ViewkycdocComponent', () => {
  let component: ViewkycdocComponent;
  let fixture: ComponentFixture<ViewkycdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewkycdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewkycdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
