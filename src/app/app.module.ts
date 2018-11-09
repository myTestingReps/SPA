import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule,MatSidenavModule,MatInputModule} from '@angular/material';
import {SideComponent} from './side_component/side-component';
import { SearchComponent } from './search_component/search-component';
import { ClientComponent } from './clients/client-info';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,SideComponent,SearchComponent,ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }