import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosSaltarComponent } from './videojuegos-saltar.component';

describe('VideojuegosSaltarComponent', () => {
  let component: VideojuegosSaltarComponent;
  let fixture: ComponentFixture<VideojuegosSaltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegosSaltarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideojuegosSaltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
