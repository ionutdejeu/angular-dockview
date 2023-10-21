import { AfterViewInit, Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { IContentRenderer, IGroupPanelInitParameters, PanelUpdateEvent, Parameters } from 'dockview-core';

@Component({
  selector: 'app-dockview-tab-content',
  templateUrl: './dockview-tab-content.component.html',
  styleUrls: ['./dockview-tab-content.component.css']
})
export class DockviewTabContentComponent implements IContentRenderer, AfterViewInit {
  private _element: HTMLElement;
  @ViewChild('dockviewTabContentRoot', { static: false }) divDockViewRoot?: ElementRef;
  @ViewChild('tabContentContainerRef', { read: ViewContainerRef }) tabContent?: ViewContainerRef;
  
  get element(): HTMLElement {
    return this._element;
  }

  constructor() {
    this._element = document.createElement('div');
    this._element.style.padding = '20px';
    this._element.style.color = 'white';
  }
  
  ngAfterViewInit(): void {

  }

  init(params: IGroupPanelInitParameters): void {
    this._element.textContent = params.params['title'];
  }

  update(event: PanelUpdateEvent<Parameters>): void {
    this._element.textContent = event.params['title'];
  }

}
