import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerAsCustomElements } from './@angular/elements';

import { AppModule, customElements } from './app/app.module';

registerAsCustomElements(customElements, () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
})
  .then(() => { }, () => { });
