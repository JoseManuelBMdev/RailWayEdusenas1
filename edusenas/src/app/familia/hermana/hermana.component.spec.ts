import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanaComponent } from './hermana.component';

describe('HermanaComponent', () => {
  let component: HermanaComponent;
  let fixture: ComponentFixture<HermanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HermanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HermanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
