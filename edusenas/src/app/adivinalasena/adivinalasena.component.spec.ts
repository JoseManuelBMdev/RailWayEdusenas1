import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinalasenaComponent } from './adivinalasena.component';

describe('AdivinalasenaComponent', () => {
  let component: AdivinalasenaComponent;
  let fixture: ComponentFixture<AdivinalasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdivinalasenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdivinalasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
