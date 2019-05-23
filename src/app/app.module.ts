import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreenComponent } from './components/screen/screen.component';
import { KeyComponent } from './components/key/key.component';
import { ChargesComponent } from './components/charges/charges.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    KeyComponent,
    ChargesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
