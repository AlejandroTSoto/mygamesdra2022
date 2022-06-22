import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroFantasyComponent } from './filtro-fantasy.component';

describe('FiltroFantasyComponent', () => {
  let component: FiltroFantasyComponent;
  let fixture: ComponentFixture<FiltroFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroFantasyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
