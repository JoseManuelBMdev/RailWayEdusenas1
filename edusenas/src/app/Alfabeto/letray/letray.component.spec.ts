import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrayComponent } from './letray.component';

describe('LetrayComponent', () => {
  let component: LetrayComponent;
  let fixture: ComponentFixture<LetrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
