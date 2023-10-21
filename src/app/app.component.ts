import { Component, OnInit } from '@angular/core';
import { DynamicCompItem } from './dynamic-comp-parent/dynamic-comp.model';
import { DynamicCompService } from './dynamic-comp-parent/dynamic-comp.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dockview';
  compList: DynamicCompItem[] = [];

  constructor(private dynamicCompServ: DynamicCompService) { }
  ngOnInit(): void {
    this.compList = this.dynamicCompServ.getListOfComponent()
  }

}
