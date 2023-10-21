import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompChildComponent } from './dynamic-comp-child.component';

describe('DynamicCompChildComponent', () => {
  let component: DynamicCompChildComponent;
  let fixture: ComponentFixture<DynamicCompChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicCompChildComponent]
    });
    fixture = TestBed.createComponent(DynamicCompChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
