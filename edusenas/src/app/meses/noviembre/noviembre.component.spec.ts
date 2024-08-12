import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviembreComponent } from './noviembre.component';

describe('NoviembreComponent', () => {
  let component: NoviembreComponent;
  let fixture: ComponentFixture<NoviembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoviembreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoviembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
