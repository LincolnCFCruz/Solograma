import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nonograma5x5Component } from './nonograma5x5.component';

describe('Nonograma5x5Component', () => {
  let component: Nonograma5x5Component;
  let fixture: ComponentFixture<Nonograma5x5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nonograma5x5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nonograma5x5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
