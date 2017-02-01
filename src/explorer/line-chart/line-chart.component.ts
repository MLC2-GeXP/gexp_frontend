import {Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef} from "@angular/core";
import {Message} from "primeng/components/common/api";
import {DataService} from "../data-form/data-form.service";
/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-line-chart',
    moduleId: module.id,
    templateUrl: 'line-chart.component.html'
})

export class LineChartComponent implements OnChanges {

  msgs: Message[];

  @Input() chartData: any;

  @Input() set data(newData: any) {
    this.chartData = {
      labels: [],
      datasets: []
    }

    if (newData == null) {
      return;
    }

    this.chartData.labels = newData['years'];
    for (let set of newData['datasets']) {
      let obj = {
        label: set.country_name,
        data: set.data,
        borderColor: this.randomColor(2),
        fill: false
      };
      this.chartData.datasets.push(obj);
    }
  }

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.data = changes['data']
  }

  randomColor(brightness: any){
    function randomChannel(brightness){
      var r = 255-brightness;
      var n = 0|((Math.random() * r) + brightness);
      var s = n.toString(16);
      return (s.length==1) ? '0'+s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  }
  
  selectData(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }
}
