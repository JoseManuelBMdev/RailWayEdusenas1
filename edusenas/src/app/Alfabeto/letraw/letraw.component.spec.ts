import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrawComponent } from './letraw.component';

describe('LetrawComponent', () => {
  let component: LetrawComponent;
  let fixture: ComponentFixture<LetrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
