import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScribeSeekerPageRoutingModule } from './scribe-seeker-routing.module';

import { ScribeSeekerPage } from './scribe-seeker.page';
import { ExamListComponent } from '../shared/exam-list/exam-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScribeSeekerPageRoutingModule
  ],
  declarations: [
    ScribeSeekerPage,
    ExamListComponent
  ]
})
export class ScribeSeekerPageModule {}
