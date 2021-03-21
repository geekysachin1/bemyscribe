import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-exam',
  templateUrl: './add-new-exam.page.html',
  styleUrls: ['./add-new-exam.page.scss'],
})
export class AddNewExamPage implements OnInit {
  addNewExamForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addNewExamForm = new FormGroup({
      examName: new FormControl('', {
        validators: [Validators.required]
      }),
      address: new FormControl('', {
        validators: [Validators.required]
      }),
      city: new FormControl('', {
        validators: [Validators.required]
      }),
      date: new FormControl('', {
        validators: [Validators.required]
      }),
      time: new FormControl('', {
        validators: [Validators.required]
      }),
      skills: new FormControl(''),
    });
  }

}
