import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { HolidayService } from './holiday.service';


@Component({
	selector: 'holiday-details',
	templateUrl: './holiday-detail.html'
})
export class HolidayDetailsComponent implements OnInit{
	details:{};
	constructor(private route: ActivatedRoute, private holidayService: HolidayService){

	}

	ngOnInit(): void { 
		this.route.params.subscribe(params =>{
		this.details = this.holidayService.getHolidayDetails(params['holidayName']);
	})
	}
}