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
var CountriesListComponent = (function () {
    function CountriesListComponent() {
        this.countries = [];
    }
    CountriesListComponent.prototype.ngOnInit = function () {
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
            }, {
                'countryId': 10,
                'name': 'Germany'
            }, {
                'countryId': 11,
                'name': 'Germany'
            }, {
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
    };
    CountriesListComponent.prototype.applyFilter = function () {
        console.log('Applying filter ...');
    };
    return CountriesListComponent;
}());
CountriesListComponent = __decorate([
    core_1.Component({
        selector: 'gexp-countries-list',
        moduleId: module.id,
        templateUrl: 'countries-list.component.html',
        styleUrls: ['countries-list.component.css']
    })
], CountriesListComponent);
exports.CountriesListComponent = CountriesListComponent;
//# sourceMappingURL=countries-list.component.js.map