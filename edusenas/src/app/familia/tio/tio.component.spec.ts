import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TioComponent } from './tio.component';

describe('TioComponent', () => {
  let component: TioComponent;
  let fixture: ComponentFixture<TioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
