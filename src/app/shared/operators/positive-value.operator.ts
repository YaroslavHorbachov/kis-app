import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function positiveValue<T>(key?: string): MonoTypeOperatorFunction<T> {
  return (input$) =>
    input$.pipe(
      filter<T>((item) => Boolean(key ? item[key] : item))
    );
}
