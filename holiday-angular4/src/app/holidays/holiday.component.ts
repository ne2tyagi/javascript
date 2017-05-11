import { Component } from '@angular/core';

import { Holiday } from './holiday.model';
import { HolidayService } from './holiday.service';

@Component({
	selector: 'holidays',
	templateUrl:'./holiday-list.html'
})
export class HolidayComponent {
	holidays: Holiday[];
	constructor(private holidayService: HolidayService){
		holidayService.getHolidays('US',2015).subscribe(response => {
			console.log(response);
			this.holidays = response;
		})
	}
}