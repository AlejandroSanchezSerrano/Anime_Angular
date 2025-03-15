import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  transform(value: string, targetLang: string): Observable<string> {
    if (!value) {
      return of('');
    }

    // Limitar a 500 caracteres
    const limitedText = this.limitTo500Chars(value);

    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(limitedText)}&langpair=en|${targetLang}`;

    return this.http.get<any>(apiUrl).pipe(
      map(response => {
        if (response && response.responseData && response.responseData.translatedText) {
          return response.responseData.translatedText;
        } else {
          throw new Error('Invalid response structure');
        }
      }),
      catchError((error) => {
        console.error('Error during translation:', error);
        return of('Error de traducción');
      })
    );
  }

  private limitTo500Chars(text: string): string {
    if (text.length > 500) {
      return text.substring(0, 500);
    }
    return text;
  }
}