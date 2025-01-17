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
    const activeTabs = this.tabs?.filter(tab => tab.active );
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => { tab.active = false });
    tab.active = true;
    return false;
  }

  applyTabEffect(tab: TabComponent) {
    return {
      'hover:text-indigo-400' : !tab.active,
      'hover:text-white text-white bg-indigo-400': tab.active,
    };
  }

}
