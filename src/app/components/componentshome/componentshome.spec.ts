import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentshome } from './componentshome';

describe('Componentshome', () => {
  let component: Componentshome;
  let fixture: ComponentFixture<Componentshome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Componentshome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentshome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
