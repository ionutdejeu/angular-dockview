import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockviewTabsComponent } from './dockview-tabs.component';

describe('DockviewTabsComponent', () => {
  let component: DockviewTabsComponent;
  let fixture: ComponentFixture<DockviewTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DockviewTabsComponent]
    });
    fixture = TestBed.createComponent(DockviewTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
