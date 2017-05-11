import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Holiday } from './holiday.model';


@Injectable()
export class HolidayService {
	apiUrl = 'https://holidayapi.com/v1/holidays?key=';
	apiKey = 'aaa1410f-bea2-49c9-9983-0997157698d4';
	holidayList:Holiday[] = [];
	constructor(public http: Http){
		console.log('init HolidayService');
	}
	getHolidays(country: string, year: number, month: number = 0, day: number = 0) : Observable<Holiday[]>{
		console.log('loading Holidays');
		return this.http.get(this.apiUrl + this.apiKey + '&country='+ country
			+'&year='+year+(month?'&month='+month:'')+(day?'&day='+day:''))
			.map(res => {
				var list:Holiday[] = [];
				if(res.status == 200){
					const holidayData = res.json();
					const holidayDates = Object.keys(holidayData.holidays);
					holidayDates.forEach(function(holiday){
						list.push(holidayData.holidays[holiday]);
					});
					list = [].concat.apply([], list);
				}
				this.holidayList = list;
				return list;
			});
	}

	getHolidayDetails(holidayName: string): Holiday{
		var details = this.holidayList.find(function(holiday){
			return holiday.name === holidayName;
		});
		return details;
	}
}