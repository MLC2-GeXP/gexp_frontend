import {Component, OnInit} from "@angular/core";
/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-data-form',
    moduleId: module.id,
    templateUrl: 'data-form.component.html'
})
export class DataFormComponent implements OnInit {

    categories: any[] =[];
    subcategories: any[] = [];
    populationGender: any[] = [];
    foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
    selectedValue: string;

    ngOnInit(): void {
        //  From web service.
        this.categories = [
            {
                'categoryId': 1,
                'name': 'Education'
            },
            {
                'categoryId': 2,
                'name': 'Health'
            },
            {
                'categoryId': 3,
                'name': 'Living standards'
            }
        ];
        this.subcategories = [
            {
                'subcategoryId': 1,
                'name': 'Education subcateg'
            },
            {
                'subcategoryId': 2,
                'name': 'Health subcateg'
            },
            {
                'subcategoryId': 3,
                'name': 'Living standards subcategory'
            },
            {
                'subcategoryId': 4,
                'name': 'Living standards subcateg'
            },
            {
                'subcategoryId': 5,
                'name': 'Living standards subcateg'
            },
            {
                'subcategoryId': 6,
                'name': 'Living standards subcateg'
            },
            {
                'subcategoryId': 7,
                'name': 'Living standards subcateg'
            }
        ];
        this.populationGender = [
            {
                'genderId' : 1,
                'name': 'All'
            },
            {
                'genderId' : 2,
                'name': 'Male'
            },
            {
                'genderId' : 3,
                'name': 'Female'
            }
        ]
    }

    getData(): void {
        //  'Search' request to web service.
        console.log('Getting data ...')
        console.log('Got the data.')
    }
}
