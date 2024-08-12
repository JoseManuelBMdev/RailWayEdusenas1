import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetramComponent } from './letram.component';

describe('LetramComponent', () => {
  let component: LetramComponent;
  let fixture: ComponentFixture<LetramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
