import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DockviewTabsComponent } from './dockview-tabs/dockview-tabs.component';
import { DockviewTabContentComponent } from './dockview-tab-content/dockview-tab-content.component';
import { DynamicCompParentComponent } from './dynamic-comp-parent/dynamic-comp-parent.component';
import { DynamicCompChildComponent } from './dynamic-comp-child/dynamic-comp-child.component';
import { AdDirective } from './add-directive/ad-directive.directive';
import { DynamicCompService } from './dynamic-comp-parent/dynamic-comp.service';

@NgModule({
  declarations: [
    AppComponent,
    DockviewTabsComponent,
    DockviewTabContentComponent,
    DynamicCompParentComponent,
    DynamicCompChildComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DynamicCompService],
  bootstrap: [AppComponent],

})
export class AppModule { }
