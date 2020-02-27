import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalGovernmentComponent } from './digital-government.component';

describe('DigitalGovernmentComponent', () => {
  let component: DigitalGovernmentComponent;
  let fixture: ComponentFixture<DigitalGovernmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalGovernmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
