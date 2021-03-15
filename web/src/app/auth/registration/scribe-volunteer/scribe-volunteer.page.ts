import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scribe-volunteer',
  templateUrl: './scribe-volunteer.page.html',
  styleUrls: ['./scribe-volunteer.page.scss'],
})
export class ScribeVolunteerPage implements OnInit {
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required]
      }),
      gender: new FormControl('', {
        validators: [Validators.required]
      }),
      languagesKnown: new FormControl('', {
        validators: [Validators.required]
      }),
      mobileno: new FormControl(''),
      degree:new FormControl('', {
        validators: [Validators.required]
      }),
      specialization:new FormControl('', {
        validators: [Validators.required]
      }),
      city:new FormControl('', {
        validators: [Validators.required]
      }),
      state:new FormControl('', {
        validators: [Validators.required]
      }),
      pincode:new FormControl('', {
        validators: [Validators.required]
      }),
    });
  }

}
