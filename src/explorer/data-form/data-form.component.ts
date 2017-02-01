import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";
import {DataService} from "./data-form.service";
import {ICategory, ISubcategory, IPopulation, IData, ICountry, IIndicator} from "./data";
import {SelectItem} from 'primeng/primeng';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-data-form',
    moduleId: module.id,
    templateUrl: 'data-form.component.html'
})
export class DataFormComponent implements OnInit, OnChanges {

    private _categories: ICategory[] = [];
    private _subcategories: ISubcategory[] = [];
    private _populationGender: IPopulation[] = [];
    private _indicators: IIndicator[] = [];
    errorMessage: string;

    userform: FormGroup;
    categs: SelectItem[];
    subcategs: SelectItem[];
    indi: SelectItem[];
    genders: SelectItem[];
    fromYears: SelectItem[];
    toYears: SelectItem[];
    submitted: boolean;
    selectedCountries: any[];

    set categories(data: ICategory[]) {
      this._categories = data;
      this.categs = [];
      for (let categ of data) {
        this.categs.push({label:categ.name, value:{id:categ.id, name: categ.name}});
      }
    }

    set subcategories(data: ISubcategory[]) {
      this._subcategories = data;
      this.subcategs = [];

      for (let subcateg of data) {
        this.subcategs.push({label:subcateg.name, value:{id:subcateg.id, name: subcateg.name}});
      }
    }

    set indicators(data: IIndicator[]) {
      this.indi = [];

      for (let indi of data) {
          this.indi.push({label: indi.name, value:{id:indi.id, name:indi.name}})
      }
    }

    set populationGender(data: IPopulation[]) {
      this.genders = [];
      for (let gen of data) {
        this.genders.push({label:gen.gender, value:gen.gender});
      }
    }
  
    @Input() countries: ICountry[];
    @Input() set initialData(data: IData[]) {

      this.categories = data['categories'];
      this.populationGender = data['population'];

      let temps = this._subcategories.concat(data['categories'][0].subcategories);
      this.subcategories = temps;
      temps = data['categories'][0].subcategories[0].indicators;
      this.indicators = temps;
    }

    @Output() getDataClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _fb: FormBuilder) {  }

    ngOnInit(): void {
        this.userform = this._fb.group({
          'subcategs': new FormControl('', Validators.required),
          'categs': new FormControl('', Validators.required),
          // 'genders': new FormControl('', Validators),
          'indi': new FormControl('', Validators.required),
          'fromYear': new FormControl(''),
          'toYear': new FormControl('')
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['initialData']) {
        this.initialData = changes['initialData'].currentValue
      }
      if (changes['countries']) {
        this.countries = changes['countries'].currentValue
      }
    }

    countrySelected(selectedCountries: string[]) {
        this.selectedCountries = selectedCountries;
    }

    onSubmit(value, event: Event) {
        event.preventDefault();
        this.submitted = true;

        const params: any = {
          'categoryId': this.userform.value.categs.id,
          'subcategoryId': this.userform.value.subcategs.id,
          'indicatorId': this.userform.value.indi.id,
          'populationId': this.userform.value.genders,
          'countryIds': this.selectedCountries,
          'fromYear': this.userform.value.fromYear,
          'toYear': this.userform.value.toYear
        };

        this.getDataClicked.emit(params);
    }

    categoryChanged(value) {
      for (let category of this._categories) {
        if (category.id == value) {
          this._subcategories = [];
          this.subcategories = this._subcategories.concat(category.subcategories);
          this.indicators = this._indicators.concat(category.subcategories[0].indicators)
          break;
        }
      }
    }

    subcategoryChanged(value) {
      for (let subcategory of this._subcategories) {
        if (subcategory.id == value) {
          this._indicators = [];
          this.indicators = this._indicators.concat(subcategory.indicators);
          break;
        }
      }
    }
    

    get diagnostic() { return JSON.stringify(this.userform.value); }
}
