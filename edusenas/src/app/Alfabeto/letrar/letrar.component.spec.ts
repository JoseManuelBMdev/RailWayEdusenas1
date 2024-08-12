import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrarComponent } from './letrar.component';

describe('LetrarComponent', () => {
  let component: LetrarComponent;
  let fixture: ComponentFixture<LetrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
