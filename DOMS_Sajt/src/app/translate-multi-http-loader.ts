import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private resources: { prefix: string; suffix: string }[]
  ) {}

  public getTranslation(lang: string): Observable<any> {
    return forkJoin(
      this.resources.map(config =>
        this.http.get(`${config.prefix}${lang}${config.suffix}`)
      )
    ).pipe(
      map(response => response.reduce((acc, res) => ({ ...acc, ...res }), {}))
    );
  }
}
