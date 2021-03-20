import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ScribeVolunteerPageRoutingModule } from './scribe-volunteer-routing.module';
import { ScribeVolunteerPage } from './scribe-volunteer.page';

@NgModule({
  imports: [
    SharedModule,
    ScribeVolunteerPageRoutingModule,
  ],
  declarations: [ScribeVolunteerPage]
})
export class ScribeVolunteerPageModule {}
