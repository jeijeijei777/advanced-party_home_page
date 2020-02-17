import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { ContactComponent } from './contact/contact.component';
import { RecruitComponent } from './recruit/recruit.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [ContactComponent, RecruitComponent],
    imports: [
        CommonModule,
        PartyRoutingModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
    ],
    exports: [
        ContactComponent, RecruitComponent
    ]
})
export class PartyModule { }
