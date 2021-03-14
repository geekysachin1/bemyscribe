import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScribeVolunteerPageRoutingModule } from './scribe-volunteer-routing.module';

import { ScribeVolunteerPage } from './scribe-volunteer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScribeVolunteerPageRoutingModule
  ],
  declarations: [ScribeVolunteerPage]
})
export class ScribeVolunteerPageModule {}
