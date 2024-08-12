import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetragComponent } from './letrag.component';

describe('LetragComponent', () => {
  let component: LetragComponent;
  let fixture: ComponentFixture<LetragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetragComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
