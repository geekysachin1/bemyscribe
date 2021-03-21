import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScribeSeekerPageRoutingModule } from './scribe-seeker-routing.module';

import { ScribeSeekerPage } from './scribe-seeker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScribeSeekerPageRoutingModule
  ],
  declarations: [ScribeSeekerPage]
})
export class ScribeSeekerPageModule {}
