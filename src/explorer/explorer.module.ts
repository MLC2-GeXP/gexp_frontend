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
import {AutoCompleteModule} from 'primeng/primeng';
import {DataService} from "./data-form/data-form.service";
import {DropdownModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';
import {PanelModule, ListboxModule, TabViewModule, CheckboxModule, ButtonModule, MultiSelectModule, InplaceModule} from 'primeng/primeng';
import {ReactiveFormsModule} from "@angular/forms";

/**
 * Created by calin.crist on 15/01/2017.
 */

@NgModule({
    imports: [
        SharedModule,
        AutoCompleteModule,
        DropdownModule,
        ChartModule,
        PanelModule,
        ListboxModule,
        ReactiveFormsModule,
        TabViewModule,
        CheckboxModule,
        ButtonModule,
        InplaceModule,
        MultiSelectModule,
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
    ],
  providers: [
    DataService
  ]
})

export class ExplorerModule {  }
