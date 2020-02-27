import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { PartyModule } from '../party/party.module';
import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies/policies.component';
import { DigitalGovernmentComponent } from './digital-government/digital-government.component';
import { VotingComponent } from './voting/voting.component';
import { RemoteWorkingComponent } from './remote-working/remote-working.component';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [PoliciesComponent, DigitalGovernmentComponent, VotingComponent, RemoteWorkingComponent, EducationComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PoliciesRoutingModule,
    SharedModule,
    PartyModule,
  ],
  exports: [
    PoliciesComponent,
  ]
})
export class PoliciesModule { }
