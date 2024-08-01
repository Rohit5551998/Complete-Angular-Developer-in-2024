import { Component, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.tabs);
  }

}
