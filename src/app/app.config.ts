import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withRouterConfig({scrollPositionRestoration:'enabled'})), provideClientHydration(), provideHttpClient(withFetch()), importProvidersFrom(BrowserModule)]
};
