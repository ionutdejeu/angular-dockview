import { Type } from "@angular/core";
import { Parameters } from "dockview-core";

export class DockViewTabItem {
    constructor(
        public id: string,
        public componentKey: string,
        public component: Type<any>,
        public params: Parameters) { }
}


export interface DockviewTabPanelOptions {
    params: Parameters;
}
