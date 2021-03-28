import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/modal.service';
import { ValidationPopupComponent } from '../../shared/validation-popup/validation-popup.component';

@Component({
  selector: 'app-add-new-exam',
  templateUrl: './add-new-exam.page.html',
  styleUrls: ['./add-new-exam.page.scss'],
})
export class AddNewExamPage implements OnInit {
  addNewExamForm: FormGroup;

  constructor(private modalServe: ModalService) { }

  ngOnInit() {
    this.addNewExamForm = new FormGroup({
      examName: new FormControl('', {
        validators: [Validators.required]
      }),
      address: new FormControl('', {
        validators: [Validators.required]
      }),
      examCity: new FormControl('', {
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

  onAddExamSubmission(){
    if(!this.addNewExamForm.valid) {
      this.modalServe.presentModal(ValidationPopupComponent, {controls: this.addNewExamForm.controls});
    }
  }
}
