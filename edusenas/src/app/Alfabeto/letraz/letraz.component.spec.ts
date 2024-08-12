import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrazComponent } from './letraz.component';

describe('LetrazComponent', () => {
  let component: LetrazComponent;
  let fixture: ComponentFixture<LetrazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetrazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetrazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
