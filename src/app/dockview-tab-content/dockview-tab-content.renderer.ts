import { IContentRenderer, IGroupPanelInitParameters, PanelUpdateEvent, Parameters } from "dockview-core";

export class DockviewTabContent implements IContentRenderer {
    private _element: HTMLElement;

    get element(): HTMLElement {
        return this._element;
    }

    constructor() {
        this._element = document.createElement('div');
        this._element.style.padding = '20px';
        this._element.style.color = 'white';
    }

    init(params: IGroupPanelInitParameters): void {
        this._element.textContent = params.params['title'];
    }

    update(event: PanelUpdateEvent<Parameters>): void {
        this._element.textContent = event.params['title'];
    }
}