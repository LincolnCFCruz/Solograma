import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanhouComponent } from './ganhou.component';

describe('GanhouComponent', () => {
  let component: GanhouComponent;
  let fixture: ComponentFixture<GanhouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanhouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
