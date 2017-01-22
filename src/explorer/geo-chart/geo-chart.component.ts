import {Component} from "@angular/core";
/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-geo-chart',
    moduleId: module.id,
    templateUrl: 'geo-chart.component.html',
    styleUrls: ['geo-chart.component.css']
})
export class GeoChartComponent {
  geoChartData: any = {
    chartType: 'GeoChart',
    dataTable: [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ],
    options: {
      width: 850,
      height: 500
    },
  }
}
