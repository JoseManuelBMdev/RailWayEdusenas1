import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrabComponent } from './letrab.component';

describe('LetrabComponent', () => {
  let component: LetrabComponent;
  let fixture: ComponentFixture<LetrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
