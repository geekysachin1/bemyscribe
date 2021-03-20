import { NgModule } from '@angular/core';

import { ScribeSeekerPageRoutingModule } from './scribe-seeker-routing.module';

import { ScribeSeekerPage } from './scribe-seeker.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ScribeSeekerPageRoutingModule
  ],
  declarations: [ScribeSeekerPage]
})
export class ScribeSeekerPageModule {}
