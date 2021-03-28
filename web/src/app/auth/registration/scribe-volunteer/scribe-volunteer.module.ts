import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ScribeVolunteerPageRoutingModule } from './scribe-volunteer-routing.module';
import { ScribeVolunteerPage } from './scribe-volunteer.page';
import { ValidationPopupComponent } from '../../../shared/validation-popup/validation-popup.component';

@NgModule({
  imports: [
    SharedModule,
    ScribeVolunteerPageRoutingModule,
  ],
  declarations: [
    ScribeVolunteerPage,
    ValidationPopupComponent
  ]
})
export class ScribeVolunteerPageModule {}
