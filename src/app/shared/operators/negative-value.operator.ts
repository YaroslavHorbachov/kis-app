import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';
import { negate } from 'lodash';

export function negativeValue<T>(): MonoTypeOperatorFunction<T> {
  return (input$) => input$.pipe(filter<T>(negate(Boolean)));
}
