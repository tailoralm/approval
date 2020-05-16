import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSolicitationComponent } from './create-solicitation/create-solicitation.component';
import { SolicitationListComponent } from './solicitation-list/solicitation-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'solicitation', pathMatch: 'full' },
    { path: 'new', component: CreateSolicitationComponent},
    { path: 'solicitations', component: SolicitationListComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}