import {Component, OnInit} from "@angular/core";
/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-countries-list',
    moduleId: module.id,
    templateUrl: 'countries-list.component.html',
    styleUrls: ['countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

    countries: any[] = [];

    ngOnInit(): void {
        //  From web service
        this.countries = [
            {
                'countryId': 1,
                'name': 'Germany'
            },
            {
                'countryId': 2,
                'name': 'Germany'
            },
            {
                'countryId': 3,
                'name': 'Germany'
            },
            {
                'countryId': 4,
                'name': 'Germany'
            },
            {
                'countryId': 5,
                'name': 'Germany'
            },
            {
                'countryId': 6,
                'name': 'Germany'
            },
            {
                'countryId': 7,
                'name': 'Germany'
            },
            {
                'countryId': 8,
                'name': 'Germany'
            },
            {
                'countryId': 9,
                'name': 'Germany'
            },{
                'countryId': 10,
                'name': 'Germany'
            },{
                'countryId': 11,
                'name': 'Germany'
            },{
                'countryId': 12,
                'name': 'Germany'
            },
            {
                'countryId': 13,
                'name': 'Germany'
            },
            {
                'countryId': 14,
                'name': 'Germany'
            },
            {
                'countryId': 15,
                'name': 'Germany'
            },
            {
                'countryId': 16,
                'name': 'Germany'
            },
            {
                'countryId': 17,
                'name': 'Germany'
            },
            {
                'countryId': 18,
                'name': 'Germany'
            },
            {
                'countryId': 19,
                'name': 'Germany'
            },
            {
                'countryId': 20,
                'name': 'Germany'
            },
            {
                'countryId': 21,
                'name': 'Germany'
            },
            {
                'countryId': 22,
                'name': 'Germany'
            },
            {
                'countryId': 23,
                'name': 'Germany'
            },
            {
                'countryId': 24,
                'name': 'Germany'
            },
            {
                'countryId': 25,
                'name': 'Germany'
            },
            {
                'countryId': 26,
                'name': 'Germany'
            },
        ];
    }

    applyFilter(): void {
        console.log('Applying filter ...')
    }
}