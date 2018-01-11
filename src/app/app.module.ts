import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MadeWithLoveComponent } from './made-with-love/made-with-love.component';

export const customElements = [
  MadeWithLoveComponent
];

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ...customElements,
  ],
  entryComponents: [
    ...customElements
  ]
})
export class AppModule {
  ngDoBootstrap() { }
}
