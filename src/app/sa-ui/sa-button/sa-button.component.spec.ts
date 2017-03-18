import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsButtonComponent } from './as-button.component';

describe('AsButtonComponent', () => {
  let component: AsButtonComponent;
  let fixture: ComponentFixture<AsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
