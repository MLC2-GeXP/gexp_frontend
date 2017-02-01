/**
 * Created by calin.crist on 24/01/2017.
 */

export interface ICountry {
  id: number;
  name: string;
}

export interface IIndicator {
  id: number;
  name: string;
}

export interface ISubcategory {
  id: number;
  name: string;
  indicators: IIndicator[];
}

export interface ICategory {
  id: number;
  name: string;
  subcategories: ISubcategory[];
}

export interface IPopulation {
  id: number;
  gender: string;
}

export interface IData {
  contries: ICountry[];
  categories: ICategory[];
  population: IPopulation[];
}

export interface IResult {
  lineChartData: any;
  geoChartData: any;
  recommendation: any[];
}
