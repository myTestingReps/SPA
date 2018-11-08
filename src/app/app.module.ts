import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule,MatSidenavModule,MatInputModule} from '@angular/material';
import {SideComponent} from './side_component/side-component';
import { SearchComponent } from './search_component/search-component';
import { ListComponent } from './list_component/list-component';
@NgModule({
  declarations: [
    AppComponent,SideComponent,SearchComponent,ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }