

import { Injectable } from '@angular/core';
import { DockViewTabItem } from './dockview-tab.model'
import { DockviewTabContentComponent } from '../dockview-tab-content/dockview-tab-content.component'


@Injectable()
export class DockViewTabsService {
    getListOfComponent() {
        return [
            new DockViewTabItem(
                'tab1',
                'tab1',
                DockviewTabContentComponent,
                { name: 'Bombasto', bio: 'Brave as they come' }
            ),
            new DockViewTabItem(
                'tab2',
                'tab2',
                DockviewTabContentComponent,
                { name: 'Bombasto', bio: 'Brave as they come' }
            ),
        ];
    }
}