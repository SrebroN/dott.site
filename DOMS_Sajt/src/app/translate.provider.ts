import { importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from './translate-multi-http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/', suffix: '/app.json' },
    { prefix: './assets/i18n/', suffix: '/pocetna.json' },
    { prefix: './assets/i18n/', suffix: '/portfolio.json' },
    { prefix: './assets/i18n/', suffix: '/usluge.json' }
  ]);
}

export function provideTranslate() {
  return importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  );
}
