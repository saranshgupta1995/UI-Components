import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexyButtonComponent } from './sexy-button.component';

describe('SexyButtonComponent', () => {
  let component: SexyButtonComponent;
  let fixture: ComponentFixture<SexyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
