import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DynamicChildComponentBase, DynamicCompItem } from './dynamic-comp.model';
import { AdDirective } from '../add-directive/ad-directive.directive';

@Component({
  selector: 'app-dynamic-comp-parent',
  templateUrl: './dynamic-comp-parent.component.html',
  styleUrls: ['./dynamic-comp-parent.component.css']
})
export class DynamicCompParentComponent implements AfterViewInit, OnInit, OnDestroy {

  @Input() compItems: DynamicCompItem[] = [];

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    for(let compI of this.compItems){
      const componentRef = viewContainerRef.createComponent<DynamicChildComponentBase>(compI.component);
      componentRef.instance.data = compI.data;
    }
    
  }

}
