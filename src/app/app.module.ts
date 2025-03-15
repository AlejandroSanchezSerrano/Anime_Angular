import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { DateRangePipe } from './pipes/date-range.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DetallesComponent,
    TranslatePipe,
    DurationPipe,
    DateRangePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }