import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatGridListModule } from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { CurrencyViewComponent } from './currency/currency-view/currency-view.component';
import { CurrencyTranferComponent } from './currency/currency-tranfer/currency-tranfer.component';
import { CurrencyBuyComponent } from './currency/currency-buy/currency-buy.component';
import { CurrencySaleComponent } from './currency/currency-sale/currency-sale.component';
import { CurrencyControlViewComponent } from './currency-control/currency-control-view/currency-control-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CurrencyControlContractComponent } from './currency-control/currency-control-contract/currency-control-contract.component';
import { CurrencyControlSpdComponent } from './currency-control/currency-control-spd/currency-control-spd.component';


//класс Routes, представляющий коллекцию маршрутов
const routes: Routes = [
   { path: '', component: HomePageComponent},
   { path: 'currency', component: CurrencyViewComponent },
   { path: 'currency/transfer', component: CurrencyTranferComponent },
   { path: 'currency/buy', component: CurrencyBuyComponent },
   { path: 'currency/sale', component: CurrencySaleComponent },
   { path: 'currency-control', component: CurrencyControlViewComponent },
   { path: 'currency-control/contract', component: CurrencyControlContractComponent },
   { path: 'currency-control/spd', component: CurrencyControlSpdComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CurrencyViewComponent,
    CurrencyTranferComponent,
    CurrencyBuyComponent,
    CurrencySaleComponent,
    CurrencyControlViewComponent,
    HomePageComponent,
    CurrencyControlContractComponent,
    CurrencyControlSpdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
