import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MustMatch, TestValidate} from '../_helpes/must-match.validator';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {DatePipe} from '@angular/common';
import {APP_DATE_FORMATS, AppDateAdapter} from '../_helpes/format-datepicker';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
const moment = _moment;

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss'],
  // providers: [
  //   {provide: DateAdapter, useClass: AppDateAdapter},
  //   {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  // ]
})
export class TestformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  minDate = new Date(1985, 4, 12);
  maxDate = new Date(1985, 4, 22);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  events: string[] = [];
  date10 = new FormControl(moment([2017, 0, 1]));
  constructor(private formBuilder: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator2: MustMatch('password', 'confirmPassword'),
      validator: TestValidate('firstName')
    });
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    let convertDate = this.datepipe.transform(new Date(event.target.value), 'yyyy-MM-dd');
    let abc = this.datepipe.transform(new Date(event.target.value),'dd/MM/yyyy');
    this.registerForm.get('date').setValue(convertDate);
    console.log(`gjhghjghjg ${event.value}`);
    console.log(abc);
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
