import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DockviewComponent } from 'dockview-core';
import { DefaultPanel } from '../dockiewService';
import { DockviewTabContent } from '../dockview-tab-content/dockview-tab-content.renderer';
import { DockViewTabsService } from './dockview-tabs.service';
import { DockViewTabContentHostDirective } from '../dockview-tab-content-host-directive/dockview-tab-content-host.directive';
import { DockviewTabContentComponent } from '../dockview-tab-content/dockview-tab-content.component';

@Component({
  selector: 'app-dockview-tabs',
  templateUrl: './dockview-tabs.component.html',
  styleUrls: ['./dockview-tabs.component.css']
})
export class DockviewTabsComponent implements AfterViewInit, OnInit, AfterViewChecked {
  @ViewChild('dockviewroot', { static: false }) divDockViewRoot?: ElementRef<HTMLDivElement>;
  @ViewChild(DockViewTabContentHostDirective, { static: true }) hostContent!: DockViewTabContentHostDirective;

  @ViewChildren(DockViewTabContentHostDirective)
  private hostTabsContent!: QueryList<DockViewTabContentHostDirective>;

  constructor(private dockViewTabsService: DockViewTabsService) {

  }
  ngAfterViewChecked(): void {

  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
    if (this.divDockViewRoot) {
      const dockview = new DockviewComponent({
        components: {
          default: DockviewTabContent,
          tab1: DockviewTabContent,
          tab2: DockviewTabContent
        },

        parentElement: this.divDockViewRoot.nativeElement,
      });
      const { clientWidth, clientHeight } = this.divDockViewRoot.nativeElement;
      dockview.layout(clientWidth, clientHeight);

      for (let tabItem of this.dockViewTabsService.getListOfComponent()) {
        dockview.addPanel({
          id: tabItem.id,
          component: tabItem.componentKey,
          params: {
            title: 'Panel' + tabItem.id,
            item: tabItem,
          },
        });
      }
      for (let p of dockview.panels) {
        let tabContentComponentInstance = this.hostContent.viewContainerRef.createComponent<DockviewTabContentComponent>(DockviewTabContentComponent)
        p.view.content.element.appendChild(tabContentComponentInstance.location.nativeElement);
        let viewComp = p.view.content as any
        viewComp.onDestroy.subscribe(() => {
          tabContentComponentInstance.destroy()
        })

      }
      //console.log('dom query', this.divDockViewRoot.nativeElement.querySelectorAll('div.dockview-tab-content-host'))

    }
  }
}
