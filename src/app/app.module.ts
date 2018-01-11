import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MadeWithLoveComponent } from './made-with-love/made-with-love.component';


@NgModule({
  declarations: [
    AppComponent,
    MadeWithLoveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
