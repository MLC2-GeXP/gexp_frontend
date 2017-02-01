import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import {DataService} from "../data-form/data-form.service";
import {ICountry} from "../data-form/data";
import {SelectItem} from 'primeng/primeng';
/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-countries-list',
    moduleId: module.id,
    templateUrl: 'countries-list.component.html',
    styleUrls: ['countries-list.component.css']
})
export class CountriesListComponent implements OnChanges {

    countries_list: SelectItem[] = [];
    selectedCountries: string[] = [];

    @Input() set countries(countries: ICountry[]) {
        this.countries_list = [];
        for (let c of countries) {
            this.countries_list.push({label: c.name, value: c.id});
        }
    }
    @Output() countrySelected: EventEmitter<string[]> = new EventEmitter<string[]>();

    ngOnChanges(changes: SimpleChanges) {
        this.countries = changes['countries'].currentValue;
    }

    onCountrySelected() {
        this.countrySelected.emit(this.selectedCountries);
    }
}
