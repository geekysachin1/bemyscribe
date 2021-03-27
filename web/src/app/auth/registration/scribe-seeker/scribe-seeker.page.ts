import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-scribe-seeker',
  templateUrl: './scribe-seeker.page.html',
  styleUrls: ['./scribe-seeker.page.scss'],
})
export class ScribeSeekerPage implements OnInit {
  registrationForm: FormGroup;
  constructor(private regService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required]
      }),
      passwords: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
      }, {validators: this.regService.validatePasswordConformPassword}),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
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

  onRegistrationSubmission() {
    this.regService.onSubmission(this.registrationForm);
  }
}
