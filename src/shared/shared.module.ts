import {NgModule} from "@angular/core";
import {StarComponent} from "./star.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { MaterialModule } from '@angular/material';
import {Ng2GoogleChartsModule} from "ng2-google-charts";

/**
 * Created by calin.crist on 14/01/2017.
 */

@NgModule({
    declarations: [
        StarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        MaterialModule,
        Ng2GoogleChartsModule
    ]
})

export class SharedModule {  }
