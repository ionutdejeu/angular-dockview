import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dockview-tab-host]'
})
export class DockViewTabContentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
