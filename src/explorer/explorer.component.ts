import {Component, OnInit} from "@angular/core";
import '../../node_modules/chart.js/src/chart.js'
import '../../node_modules/jquery/dist/jquery.js';
import {DataService} from "./data-form/data-form.service";
import {FormBuilder} from "@angular/forms";
import {IData, IPopulation, ICategory, ISubcategory, ICountry, IResult} from "./data-form/data";
/**
 * Created by calin.crist on 15/01/2017.
 */

declare var jQuery: any;

@Component({
    moduleId: module.id,
    templateUrl: 'explorer.component.html',
    styleUrls: ['explorer.component.css']
})
export class ExplorerComponent implements OnInit{
    pageTitle: string = 'Data Explorer';
    errorMessage: string;
  
    initialData: IData[];
    countries: ICountry[];
    chartData: IResult;

    constructor(private _dataService: DataService) {  }

    ngOnInit(): void {
      
      this._dataService.getInitialData()
        .subscribe(initialData => this.initialData = initialData,
                         error => {
                           this.errorMessage = <any>error;
                           console.log('Error: ' + this.errorMessage);
                         });
      
      this._dataService.getCountries()
        .subscribe(countries => this.countries = countries,
          error => {this.errorMessage = error}
        );
    }
    
    onSubmit(parameters: any): void {
      //  'Search' request to web service.
      this._dataService.getData(parameters).
      subscribe(response => {
        this.chartData = response
        console.log(this.chartData);
      },
        error => console.log(error));
    }
}
