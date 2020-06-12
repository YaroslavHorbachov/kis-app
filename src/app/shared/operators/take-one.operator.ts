import { MonoTypeOperatorFunction } from 'rxjs';
import { take } from 'rxjs/operators';
import { untilDestroy } from '@ngrx-utils/store';

export function takeOne<T>(componentScope: any): MonoTypeOperatorFunction<T> {
  return (input$) => input$.pipe(take(1), untilDestroy(componentScope));
}
