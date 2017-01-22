import {Component, OnInit} from "@angular/core";
/**
 * Created by calin.crist on 15/01/2017.
 */

const url = './explorer/loadCharts.js';

@Component({
    moduleId: module.id,
    templateUrl: 'explorer.component.html',
    styleUrls: ['explorer.component.css']
})

export class ExplorerComponent {
    pageTitle: string = 'Data Explorer';

}
