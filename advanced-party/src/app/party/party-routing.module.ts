import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RecruitComponent } from './recruit/recruit.component';


const routes: Routes = [
    // { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'recruit', component: RecruitComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartyRoutingModule { }
