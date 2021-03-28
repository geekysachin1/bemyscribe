import { NgModule } from '@angular/core';

import { AddNewExamPageRoutingModule } from './add-new-exam-routing.module';

import { AddNewExamPage } from './add-new-exam.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ValidationPopupComponent } from '../../shared/validation-popup/validation-popup.component';

@NgModule({
  imports: [
    SharedModule,
    AddNewExamPageRoutingModule
  ],
  declarations: [
    AddNewExamPage,
    ValidationPopupComponent
  ]
})
export class AddNewExamPageModule {}
