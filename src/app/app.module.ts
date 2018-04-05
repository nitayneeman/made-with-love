import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { MadeWithLoveComponent } from './made-with-love/made-with-love.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MadeWithLoveComponent
  ],
  entryComponents: [
    MadeWithLoveComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MadeWithLoveComponent, { injector });
    customElements.define('made-with-love', customElement);
  }

  ngDoBootstrap() { }
}
