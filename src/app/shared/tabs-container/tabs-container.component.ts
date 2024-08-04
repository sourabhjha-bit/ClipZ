import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements OnInit, AfterContentInit{

  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )

    if(!activeTabs || activeTabs.length === 0){
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab: TabComponent){
    this.tabs?.forEach(tab => tab.active = false)
    tab.active = true
  }

}
