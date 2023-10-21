import { Component, Input } from '@angular/core';
import { DynamicChildComponentBase } from '../dynamic-comp-parent/dynamic-comp.model'
@Component({
  selector: 'app-dynamic-comp-child',
  templateUrl: './dynamic-comp-child.component.html',
  styleUrls: ['./dynamic-comp-child.component.css']
})
export class DynamicCompChildComponent implements DynamicChildComponentBase {
  @Input() data: any;
}
