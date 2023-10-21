

import { Injectable } from '@angular/core';

import { DynamicCompChildComponent } from '../dynamic-comp-child/dynamic-comp-child.component';
import { DynamicCompItem } from './dynamic-comp.model';

@Injectable()
export class DynamicCompService {
  getListOfComponent() {
    return [
      new DynamicCompItem(
        DynamicCompChildComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new DynamicCompItem(
        DynamicCompChildComponent,
        { name: 'Dr. IQ', bio: 'Smart as they come' }
      ),
    ];
  }
}