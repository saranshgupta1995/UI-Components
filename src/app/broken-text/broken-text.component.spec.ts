import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenTextComponent } from './broken-text.component';

describe('BrokenTextComponent', () => {
  let component: BrokenTextComponent;
  let fixture: ComponentFixture<BrokenTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokenTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
