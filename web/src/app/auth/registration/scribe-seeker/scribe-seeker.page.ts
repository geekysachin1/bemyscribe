import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scribe-seeker',
  templateUrl: './scribe-seeker.page.html',
  styleUrls: ['./scribe-seeker.page.scss'],
})
export class ScribeSeekerPage implements OnInit {
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
      mobileno: new FormControl(''),
      languagesKnown: new FormControl('', {
        validators: [Validators.required]
      }),
    });
  }

}
