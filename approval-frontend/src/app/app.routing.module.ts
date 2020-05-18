import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSolicitationComponent } from './components/create-solicitation/create-solicitation.component';
import { SolicitationListComponent } from './components/solicitation-list/solicitation-list.component';
import { ApproveSolicitationComponent } from './components/approve-solicitation/approve-solicitation.component';

const routes: Routes = [
    { path: '', redirectTo: 'solicitation', pathMatch: 'full' },
    { path: '', component: CreateSolicitationComponent},
    { path: 'new', component: CreateSolicitationComponent},
    { path: 'solicitations', component: SolicitationListComponent},
    { path: 'solicitations/approve/:id', component: ApproveSolicitationComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
