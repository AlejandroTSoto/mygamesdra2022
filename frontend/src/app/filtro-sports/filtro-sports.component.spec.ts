import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroSportsComponent } from './filtro-sports.component';

describe('FiltroSportsComponent', () => {
  let component: FiltroSportsComponent;
  let fixture: ComponentFixture<FiltroSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
