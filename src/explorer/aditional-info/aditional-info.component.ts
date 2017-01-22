import {Component, OnInit} from "@angular/core";
/**
 * Created by calin.crist on 16/01/2017.
 */

@Component({
    selector: 'gexp-aditional-info',
    moduleId: module.id,
    templateUrl: 'aditional-info.component.html'
})
export class AditionalInfoComponent implements OnInit {

    panelTitle: string = 'Aditional links'
    links: any[] = []

    ngOnInit(): void {
        //  Get links from web service
        this.links = [
            {
                'name': 'Universities in USA',
                'url': 'https://www.google.com'
            },
            {
                'name': 'Law schools in USA',
                'url': 'https://www.google.com'
            },
            {
                'name': 'Healthcare in USA',
                'url': 'https://www.google.com'
            },
            {
                'name': 'Workload in USA',
                'url': 'https://www.google.com'
            }
        ]
    }
}