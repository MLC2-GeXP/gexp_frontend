import {Component, OnInit} from "@angular/core";
/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-line-chart',
    moduleId: module.id,
    templateUrl: 'line-chart.component.html'
})

export class LineChartComponent {

  lineChartOptions: any = {
    chartType: 'LineChart',
    dataTable: {
      cols: [
        {
          'type' : 'number',
          'label': 'No. of people'
        },
        {
          'type' : 'number',
          'label': 'Germany'
        },
        {
          'type' : 'number',
          'label': 'USA'
        },
        {
          'type' : 'number',
          'label': 'Brazil'
        }
      ],
      rows: [
        {
          'c': [
            {'v': 1},
            {'v': 37.8},
            {'v': 80.8},
            {'v': 41.8}
          ]
        },
        {
          'c': [
            {'v': 2},
            {'v': 30.9},
            {'v': 69.5},
            {'v': 32.4}
          ]
        },
        {
          'c': [
            {'v': 3},
            {'v': 25.4},
            {'v': 57},
            {'v': 25.7}
          ]
        },
        {
          'c': [
            {'v': 4},
            {'v': 11.7},
            {'v': 18.8},
            {'v': 10.5}
          ]
        }
      ]
    },
    options: {
      title: 'No. of people',
      subtitle: 'subcategory (in billions)',
      width: '850',
      height: '500',
      intervals: { 'lineWidth':2, 'barWidth': 0.5 },
      bars: 'vertical'
    },
  }
}
