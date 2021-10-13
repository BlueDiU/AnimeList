import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import entriesReducer from '../reducers/entriesReducer';

const reducers = combineReducers({
  auth: authReducer,
  entries: entriesReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
