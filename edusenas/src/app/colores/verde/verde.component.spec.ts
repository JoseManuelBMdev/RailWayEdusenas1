import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdeComponent } from './verde.component';

describe('VerdeComponent', () => {
  let component: VerdeComponent;
  let fixture: ComponentFixture<VerdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
