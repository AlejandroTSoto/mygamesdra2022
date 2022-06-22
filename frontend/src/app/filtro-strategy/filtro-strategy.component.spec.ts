import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroStrategyComponent } from './filtro-strategy.component';

describe('FiltroStrategyComponent', () => {
  let component: FiltroStrategyComponent;
  let fixture: ComponentFixture<FiltroStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
