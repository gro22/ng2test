import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculationComponent } from './calculation/Calculation.component';
import { CalculationDetailsComponent } from './calculation/calculation-details/calculation-details.component';

import { CalculationService } from './shared/calculation.service';
import { Logger } from './shared/calculation.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calculation', component: CalculationComponent },
  { path: 'calculation/:id', component: CalculationDetailsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculationComponent,
    CalculationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
