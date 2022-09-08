import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountUpTimerComponent } from './count-up-timer.component';

describe('CountUpTimerComponent', () => {
  let component: CountUpTimerComponent;
  let fixture: ComponentFixture<CountUpTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountUpTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountUpTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
