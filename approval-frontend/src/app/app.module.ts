import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppComponent } from './app.component';
import { CreateSolicitationComponent } from './components/create-solicitation/create-solicitation.component';
import { SolicitationListComponent } from './components/solicitation-list/solicitation-list.component';
import { ApproveSolicitationComponent } from './components/approve-solicitation/approve-solicitation.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSolicitationComponent,
    SolicitationListComponent,
    ApproveSolicitationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
