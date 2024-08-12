import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CualComponent } from './cual.component';

describe('CualComponent', () => {
  let component: CualComponent;
  let fixture: ComponentFixture<CualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
