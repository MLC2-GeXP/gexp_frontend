"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Created by calin.crist on 16/01/2017.
 */
var AditionalInfoComponent = (function () {
    function AditionalInfoComponent() {
        this.panelTitle = 'Aditional links';
        this.links = [];
    }
    AditionalInfoComponent.prototype.ngOnInit = function () {
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
        ];
    };
    return AditionalInfoComponent;
}());
AditionalInfoComponent = __decorate([
    core_1.Component({
        selector: 'gexp-aditional-info',
        moduleId: module.id,
        templateUrl: 'aditional-info.component.html'
    })
], AditionalInfoComponent);
exports.AditionalInfoComponent = AditionalInfoComponent;
//# sourceMappingURL=aditional-info.component.js.map