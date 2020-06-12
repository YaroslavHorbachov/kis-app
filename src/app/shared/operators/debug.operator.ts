import { MonoTypeOperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';

const delimiter = '=';
const defaultDelimiterLength = 20;

export function debug<T>(message?: string): MonoTypeOperatorFunction<T> {
  return (input$) =>
    input$.pipe(
      tap((data) => {
        const delimiterLine = delimiter.repeat(defaultDelimiterLength);

        console.log(`Debug`);

        if (message) {
          console.log(message);
        }

        console.log(`Start ${delimiterLine}`);

        console.log(data);

        console.log(`End ${delimiterLine}`);
      })
    );
}
