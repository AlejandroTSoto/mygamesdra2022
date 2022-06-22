import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopJuegosComponent } from './top-juegos.component';

describe('TopJuegosComponent', () => {
  let component: TopJuegosComponent;
  let fixture: ComponentFixture<TopJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
