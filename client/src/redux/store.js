/*
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger];

const store = createStore(rootReducer,
    applyMiddleware(...middlewares)
);

export default store;
*/

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'

//const middlewares = [logger];
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}


export const store = createStore(rootReducer,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default { store, persistor };