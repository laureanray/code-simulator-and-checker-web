import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountModule} from './modules/account/account.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HomeComponent } from './shared/home/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
