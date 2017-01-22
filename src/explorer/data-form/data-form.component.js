"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Created by calin.crist on 15/01/2017.
 */
var DataFormComponent = (function () {
    function DataFormComponent() {
        this.categories = [];
        this.subcategories = [];
        this.populationGender = [];
    }
    DataFormComponent.prototype.ngOnInit = function () {
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
                'categoryId': 1,
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
                'subcategoryId': 1,
                'name': 'Living standards subcategory'
            },
            {
                'subcategoryId': 1,
                'name': 'Living standards subcateg'
            },
            {
                'subcategoryId': 1,
                'name': 'Living standards subcateg'
            },
            {
                'subcategoryId': 1,
                'name': 'Living standards subcateg'
            },
            {
                'subcategoryId': 1,
                'name': 'Living standards subcateg'
            }
        ];
        this.populationGender = [
            {
                'genderId': 1,
                'name': 'All'
            },
            {
                'genderId': 2,
                'name': 'Male'
            },
            {
                'genderId': 3,
                'name': 'Female'
            }
        ];
    };
    DataFormComponent.prototype.getData = function () {
        //  'Search' request to web service.
        console.log('Getting data ...');
        console.log('Got the data.');
    };
    return DataFormComponent;
}());
DataFormComponent = __decorate([
    core_1.Component({
        selector: 'gexp-data-form',
        moduleId: module.id,
        templateUrl: 'data-form.component.html'
    })
], DataFormComponent);
exports.DataFormComponent = DataFormComponent;
//# sourceMappingURL=data-form.component.js.map