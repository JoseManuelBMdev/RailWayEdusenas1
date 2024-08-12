import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoOneComponent } from './videojuego-one.component';

describe('VideojuegoOneComponent', () => {
  let component: VideojuegoOneComponent;
  let fixture: ComponentFixture<VideojuegoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegoOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideojuegoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
