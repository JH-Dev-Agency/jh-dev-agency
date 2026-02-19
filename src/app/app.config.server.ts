import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
// Quitamos la importación de serverRoutes que daba problemas aquí

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // provideServerRouting eliminado para evitar el error TS2724
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
