import { Component } from "@angular/core";





@Component({
    selector : 'app-tab',
    templateUrl : './cards.component.html',
    styleUrls : ['./cards.component.scss']
})

export class TabComponent {
    selectedWork !: string
    onTabClick(val : string){
        this.selectedWork = val
    }
}