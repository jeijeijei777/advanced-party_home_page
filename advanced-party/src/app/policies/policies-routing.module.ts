import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliciesComponent } from './policies/policies.component';
import { DigitalGovernmentComponent } from './digital-government/digital-government.component';
import { VotingComponent } from './voting/voting.component';
import { RemoteWorkingComponent } from './remote-working/remote-working.component';
import { EducationComponent } from './education/education.component'

const routes: Routes = [
    { path: '', component: PoliciesComponent },
    { path: 'digital-government', component: DigitalGovernmentComponent },
    { path: 'voting', component: VotingComponent },
    { path: 'remote-working', component: RemoteWorkingComponent },
    { path: 'education', component: EducationComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoliciesRoutingModule { }
