import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/shared/modal.service';
import { ValidationPopupComponent } from '../../shared/validation-popup/validation-popup.component';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private modalService: ModalService ) { }

  validatePasswordConformPassword(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
  }

  onSubmission(regForm) {
    if(!regForm.valid) {
      this.modalService.presentModal(ValidationPopupComponent, {controls: regForm.controls})
    }

  }
}
