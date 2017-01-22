import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {ExplorerComponent} from "./explorer.component";
import {CommonModule} from "@angular/common";
import {DataFormComponent} from "./data-form/data-form.component";
import {CountriesListComponent} from "./countries-list/countries-list.component";
import {LineChartComponent} from "./line-chart/line-chart.component";
import {GeoChartComponent} from "./geo-chart/geo-chart.component";
import {AditionalInfoComponent} from "./aditional-info/aditional-info.component";
/**
 * Created by calin.crist on 15/01/2017.
 */

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'explorer', component: ExplorerComponent }
        ])
    ],
    declarations: [
        ExplorerComponent,
        DataFormComponent,
        CountriesListComponent,
        LineChartComponent,
        GeoChartComponent,
        AditionalInfoComponent
    ]
})

export class ExplorerModule {  }