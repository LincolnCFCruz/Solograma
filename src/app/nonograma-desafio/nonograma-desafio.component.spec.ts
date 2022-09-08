import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonogramaDesafioComponent } from './nonograma-desafio.component';

describe('NonogramaDesafioComponent', () => {
  let component: NonogramaDesafioComponent;
  let fixture: ComponentFixture<NonogramaDesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonogramaDesafioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonogramaDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
