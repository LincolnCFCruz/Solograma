import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nonograma10x10Component } from './nonograma10x10.component';

describe('Nonograma10x10Component', () => {
  let component: Nonograma10x10Component;
  let fixture: ComponentFixture<Nonograma10x10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nonograma10x10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nonograma10x10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
