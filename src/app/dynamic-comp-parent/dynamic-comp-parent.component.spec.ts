import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompParentComponent } from './dynamic-comp-parent.component';

describe('DynamicCompParentComponent', () => {
  let component: DynamicCompParentComponent;
  let fixture: ComponentFixture<DynamicCompParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicCompParentComponent]
    });
    fixture = TestBed.createComponent(DynamicCompParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
