import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanhouDesafioComponent } from './ganhou-desafio.component';

describe('GanhouDesafioComponent', () => {
  let component: GanhouDesafioComponent;
  let fixture: ComponentFixture<GanhouDesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanhouDesafioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanhouDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
