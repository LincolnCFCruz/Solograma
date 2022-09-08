import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nonograma15x15Component } from './nonograma15x15.component';

describe('Nonograma15x15Component', () => {
  let component: Nonograma15x15Component;
  let fixture: ComponentFixture<Nonograma15x15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nonograma15x15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nonograma15x15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
