import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockviewTabContentComponent } from './dockview-tab-content.component';

describe('DockviewTabContentComponent', () => {
  let component: DockviewTabContentComponent;
  let fixture: ComponentFixture<DockviewTabContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DockviewTabContentComponent]
    });
    fixture = TestBed.createComponent(DockviewTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
