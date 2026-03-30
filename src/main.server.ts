import { bootstrapApplication } from '@angular/platform-browser';

import { config } from './app/app.config.server';
import { App } from './app/app';

export default (context: any) => {
  return bootstrapApplication(App, config, context);
};
