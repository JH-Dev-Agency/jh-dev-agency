import { bootstrapApplication } from '@angular/platform-browser';

import { config } from './app/app.config.server'; // Este es el import que falla
import { App } from './app/app';

const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;
