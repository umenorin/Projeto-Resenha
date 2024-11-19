import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './routes/app.routes';
import { AuthInterceptor } from './services/AuthInterceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withInterceptorsFromDi()), // Permite usar interceptors registrados no DI
    { provide: AuthInterceptor, useClass: AuthInterceptor },
  ],
};
