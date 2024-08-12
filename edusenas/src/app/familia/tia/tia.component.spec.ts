import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiaComponent } from './tia.component';

describe('TiaComponent', () => {
  let component: TiaComponent;
  let fixture: ComponentFixture<TiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
