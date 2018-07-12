import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MadeWithLoveModule } from 'angular-made-with-love';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MadeWithLoveModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
