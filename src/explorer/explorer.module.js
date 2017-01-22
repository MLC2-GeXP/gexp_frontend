"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var router_1 = require("@angular/router");
var explorer_component_1 = require("./explorer.component");
var data_form_component_1 = require("./data-form/data-form.component");
var countries_list_component_1 = require("./countries-list/countries-list.component");
var line_chart_component_1 = require("./line-chart/line-chart.component");
var geo_chart_component_1 = require("./geo-chart/geo-chart.component");
var aditional_info_component_1 = require("./aditional-info/aditional-info.component");
/**
 * Created by calin.crist on 15/01/2017.
 */
var ExplorerModule = (function () {
    function ExplorerModule() {
    }
    return ExplorerModule;
}());
ExplorerModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'explorer', component: explorer_component_1.ExplorerComponent }
            ])
        ],
        declarations: [
            explorer_component_1.ExplorerComponent,
            data_form_component_1.DataFormComponent,
            countries_list_component_1.CountriesListComponent,
            line_chart_component_1.LineChartComponent,
            geo_chart_component_1.GeoChartComponent,
            aditional_info_component_1.AditionalInfoComponent
        ]
    })
], ExplorerModule);
exports.ExplorerModule = ExplorerModule;
//# sourceMappingURL=explorer.module.js.map