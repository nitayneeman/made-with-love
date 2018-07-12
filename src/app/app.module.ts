import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MadeWithLoveModule } from 'angular-made-with-love';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MadeWithLoveModule],
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
