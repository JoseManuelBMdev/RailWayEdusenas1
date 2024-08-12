import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegroComponent } from './negro.component';

describe('NegroComponent', () => {
  let component: NegroComponent;
  let fixture: ComponentFixture<NegroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
