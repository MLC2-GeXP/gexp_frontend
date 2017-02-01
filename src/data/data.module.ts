import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {DataComponent} from "./data.component";
import {UpdateDataComponent} from "./update-data/update-data.component";
import {DeleteDataComponent} from "./delete-data/delete-data.component";
import {InplaceModule} from 'primeng/primeng';
/**
 * Created by calin.crist on 22/01/2017.
 */

@NgModule({
  imports: [
    SharedModule,
    InplaceModule,
    RouterModule.forChild([
      {
        path: 'data', component: DataComponent
      }
    ])
  ],
  declarations:[
    DataComponent,
    UpdateDataComponent,
    DeleteDataComponent
  ]
})
export class DataModule {

}
