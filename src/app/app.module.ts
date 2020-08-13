import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayTextComponent } from './display-text/display-text.component'
import { InputTextComponent } from './input-text/input-text.component'

@NgModule({
  declarations: [
    AppComponent,
    DisplayTextComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
