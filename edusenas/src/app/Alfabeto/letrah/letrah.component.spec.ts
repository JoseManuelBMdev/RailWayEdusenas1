import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrahComponent } from './letrah.component';

describe('LetrahComponent', () => {
  let component: LetrahComponent;
  let fixture: ComponentFixture<LetrahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
