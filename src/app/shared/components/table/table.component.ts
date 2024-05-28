import { Component } from "@angular/core";
import { mobileProducts } from "../../const/cards";
import { Imobile } from "../../module/table.interface";



@Component({
    selector : 'app-mobile',
    templateUrl : './table.component.html',
    styleUrls : ['./table.component.scss']
 })

export class MobileCards{
    mobileArr : Array<Imobile> = mobileProducts;
}