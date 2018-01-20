import { Component, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnChanges {
	myForm: FormGroup;

  constructor(private fb: FormBuilder) {

  	this.myForm = fb.group({
  		name: ['Sample',Validators.minLength(4)],
  		email: [null, [Validators.required, Validators.email ] ],
  		newValid: ''
  	});
  	this.myForm.get('newValid').valueChanges.forEach(
  		(value: string) => {this.setAnotherValidation(value)}
  	)
  }


  setAnotherValidation(newValid) {
  if(newValid){
  	console.log('setting new validations', newValid)
  	this.myForm.get('name').setValidators([Validators.minLength(4), Validators.maxLength(10)]);
  	}else{
  		this.myForm.get('name').setValidators([]);
  	}
  }

  ngOnChanges(){
  	console.log(this.myForm);
  }

  inputUp(){
  	console.log('formSubmit', this.myForm)
  }

}
