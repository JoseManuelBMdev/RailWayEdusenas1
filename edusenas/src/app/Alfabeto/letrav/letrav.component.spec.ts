import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetravComponent } from './letrav.component';

describe('LetravComponent', () => {
  let component: LetravComponent;
  let fixture: ComponentFixture<LetravComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetravComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetravComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
