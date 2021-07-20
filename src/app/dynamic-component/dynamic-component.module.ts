import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { UsercardComponent } from './usercard/usercard.component';
import { ProfileComponent } from './profile/profile.component';
import { GuestcardComponent } from './guestcard/guestcard.component';
import { ProfilehostDirective } from './profilehost.directive';
import { ProfilehostService } from './profilehost.service';
import { DynamicComponentComponent } from './dynamic-component.component';


@NgModule({
  declarations: [
    UsercardComponent,
    ProfileComponent,
    GuestcardComponent,
    ProfilehostDirective,
    DynamicComponentComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ],
  providers:[ProfilehostService],
  entryComponents:[ UsercardComponent,GuestcardComponent]

})
export class DynamicComponentModule { }
