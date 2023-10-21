import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DockviewComponent } from 'dockview-core';
import { DefaultPanel } from '../dockiewService';

@Component({
  selector: 'app-dockview-tabs',
  templateUrl: './dockview-tabs.component.html',
  styleUrls: ['./dockview-tabs.component.css']
})
export class DockviewTabsComponent implements AfterViewInit {
  @ViewChild('dockviewroot', { static: false }) divDockViewRoot?: ElementRef;

  constructor() {

  }
  ngAfterViewInit() {
    if (this.divDockViewRoot) {
      const dockview = new DockviewComponent({
        components: {
          default: DefaultPanel,
        },
        parentElement: this.divDockViewRoot.nativeElement,
      });
      const { clientWidth, clientHeight } = this.divDockViewRoot.nativeElement;
      dockview.layout(clientWidth, clientHeight);

      dockview.addPanel({
        id: 'panel_1',
        component: 'default',
        params: {
          title: 'Panel 1',
        },
      });

      dockview.addPanel({
        id: 'panel_2',
        component: 'default',
        params: {
          title: 'Panel 2',
        },
      });

      dockview.addPanel({
        id: 'panel_3',
        component: 'default',
        params: {
          title: 'Panel 3',
        },
        position: { referencePanel: 'panel_1', direction: 'right' },
      });

      dockview.addPanel({
        id: 'panel_4',
        component: 'default',
        params: {
          title: 'Panel 4',
        },
        position: { referencePanel: 'panel_3', direction: 'right' },
      });

      dockview.addPanel({
        id: 'panel_5',
        component: 'default',
        params: {
          title: 'Panel 5',
        },
        position: { referencePanel: 'panel_4', direction: 'below' },
      });

      dockview.addPanel({
        id: 'panel_6',
        component: 'default',
        params: {
          title: 'Panel 6',
        },
        position: { referencePanel: 'panel_5', direction: 'right' },
      });
    }

  }
}
