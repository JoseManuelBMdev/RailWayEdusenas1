import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetradComponent } from './letrad.component';

describe('LetradComponent', () => {
  let component: LetradComponent;
  let fixture: ComponentFixture<LetradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetradComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
