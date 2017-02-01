import {Component, Input, SimpleChanges, OnChanges} from "@angular/core";
/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-geo-chart',
    moduleId: module.id,
    templateUrl: 'geo-chart.component.html',
    styleUrls: ['geo-chart.component.css']
})
export class GeoChartComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    // this.data = changes['data']
  }

  @Input() chartData: any = {
      chartType: 'GeoChart',
      dataTable: [
        ['Country', 'Average value:']
      ],
      options: {
        width: 800,
        height: 450
      }
    };

  @Input() set data(newData: any) {
    this.chartData = {
      chartType: 'GeoChart',
      dataTable: [
        ['Country', 'Average value']
      ],
      options: {
        width: 800,
        height: 450
      }
    };
    if (newData == null) {
      return
    }

    for (let set of newData['datasets']) {
      let average = 0;
      for (let value of set['data']) {
        average = average + Number(value);
      }
      average = average / set['data'].length;
      let countryName = set['country_name'];

      this.chartData.dataTable.push([countryName, average]);
    }
  }
  // {
  //   chartType: 'GeoChart',
  //   dataTable: [
  //     ['Country', 'Popularity'],
  //     ['Germany', 200],
  //     ['United States', 300],
  //     ['Brazil', 400],
  //     ['Canada', 500],
  //     ['France', 600],
  //     ['RU', 700]
  //   ],
    // options: {
    //   width: 850,
    //   height: 500
    // },
  // }
}
