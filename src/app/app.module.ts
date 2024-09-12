import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FullLayoutComponent } from './shared/full-layout/full-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/full-layout/header/header.component';
import { SideNavComponent } from './shared/full-layout/side-nav/side-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
