import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { MadeWithLoveComponent } from './made-with-love.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MadeWithLoveComponent],
  entryComponents: [MadeWithLoveComponent]
})
export class MadeWithLoveModule {
  constructor(private injector: Injector) {
    const madeWithLoveElement = createCustomElement(MadeWithLoveComponent, { injector });

    customElements.define('made-with-love', madeWithLoveElement);
  }
}
