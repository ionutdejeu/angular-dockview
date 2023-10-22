import { DockviewEvent, DockviewGroupPanel, GroupPanelContentPartInitParameters, IContentRenderer, IGroupPanelInitParameters, PanelUpdateEvent, Parameters } from "dockview-core";
import { Observable, Subject } from 'rxjs';

export class DockviewTabContent implements IContentRenderer {
    private _element: HTMLElement;
    public onDestroy:Subject<void> = new Subject()
    public onVisibilityChanged:Subject<boolean> = new Subject()
    get element(): HTMLElement {
        return this._element;
    }
    
    onPanelVisibleChange(isPanelVisible: boolean): void {
        console.log('visibility changed',isPanelVisible)
        this.onVisibilityChanged.next(isPanelVisible)
    }

    constructor() {
        this.onDestroy = new Subject()
        this.onVisibilityChanged = new Subject()
        this._element = document.createElement('div');
        this._element.style.padding = '20px';
        this._element.style.color = 'white';
    }
    dispose(){
        console.log('dispose')
        this.onDestroy.next()
    }
    focus?(): void {
        
    }
    init(params: IGroupPanelInitParameters): void {
        this._element.textContent = params.params['title'];
        let childElem = document.createElement('div')
        childElem.className = "dockview-tab-content-host"
        const attr = document.createAttribute("dockview-tab-host");
        childElem.setAttributeNode(attr)

        this._element.appendChild(childElem)
    }

    update(event: PanelUpdateEvent<Parameters>): void {
        //this._element.textContent = event.params['title'];
        
    }
}
 