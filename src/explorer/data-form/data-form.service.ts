import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ICountry, IData, IResult} from "./data";
/**
 * Created by calin.crist on 24/01/2017.
 */

@Injectable()
export class DataService {

  private _localhostUrl = 'http://localhost:8000';
  private _hostUrl = 'https://gexp-core-api.herokuapp.com';

  private _countriesUrl = this._hostUrl + '/countries/?format=json';
  private _initialDataUrl = this._hostUrl + '/initialdata/?format=json';
  private _getDataUrl = this._hostUrl + '/data'; //  /search/22/11/?countryIds=[1]&time=1950-200

  constructor(private _http: Http) { }


  getData(input: any): Observable<IResult> {

    const categoryId: string = input['categoryId']; // number
    const subcategoryId: string = input['subcategoryId']; // number
    const indicatorId: string = input['indicatorId']; // number
    const countryIds: any[] = input['countryIds']; // array
    const fromYear: string = input['fromYear'];
    const toYear: string = input['toYear'];

    var finalUrl = `${this._getDataUrl}/${categoryId}/${subcategoryId}/${indicatorId}/`;

    if (countryIds) {
      finalUrl += `?countryIds=[${countryIds.toString()}]`;
    }
    if (fromYear && toYear) {
      finalUrl += `&time=${fromYear}-${toYear}`;
    }

    return this._http.get(finalUrl)
      .map((response: Response) => <IResult> response.json())
      .do(data => console.log('Chart data: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getInitialData(): Observable<IData[]> {
    return this._http.get(this._initialDataUrl)
      .map((response: Response) => <IData[]> response.json())
      .do(data => console.log('Initial data: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCountries(): Observable<ICountry[]> {
    return this._http.get(this._countriesUrl)
      .map((response: Response) => <ICountry[]> response.json())
      .do(data => console.log('Countries: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
