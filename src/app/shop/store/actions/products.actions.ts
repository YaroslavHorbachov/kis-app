import { createAction, props } from '@ngrx/store';
import { CustomerProductResponseViewModel } from 'src/app/shared/services';
import { errorProps } from 'src/app/shared/redux';

const LOAD = '[Shop Products] Load';
const LOAD_SUCCESS = '[Shop Products] Load Success';
const LOAD_ERROR = '[Shop Products] Load Error';

const loadSuccessProps = props<{ products: CustomerProductResponseViewModel[] }>();

const load = createAction(LOAD);
const loadSuccess = createAction(LOAD_SUCCESS, loadSuccessProps);
const loadError = createAction(LOAD_ERROR, errorProps);

const RESET = '[Shop Products] Reset';

const reset = createAction(RESET);

export const ProductsActions = {
  load,
  loadSuccess,
  loadError,
  reset,
};
