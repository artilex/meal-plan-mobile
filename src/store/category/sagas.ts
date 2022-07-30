import {takeLatest, put, call} from 'redux-saga/effects';

import {fetchCategories} from 'src/services/api/category';
import {Category} from 'src/services/api/types';
import {categoryActions} from './slice';

export function* handleFetchCategories() {
  try {
    const categories: Category[] = yield call(fetchCategories);

    yield put(categoryActions.loaded(categories));
  } catch ({message}) {
    yield put(categoryActions.failed(message));
  }
}

export function* watchCategory() {
  yield takeLatest(categoryActions.fetch.type, handleFetchCategories);
}
