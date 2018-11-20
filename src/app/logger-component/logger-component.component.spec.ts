import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerComponentComponent } from './logger-component.component';

describe('LoggerComponentComponent', () => {
  let component: LoggerComponentComponent;
  let fixture: ComponentFixture<LoggerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
