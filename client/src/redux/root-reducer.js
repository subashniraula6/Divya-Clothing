/*
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user : userReducer,
    cart : cartReducer
});
*/
import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';

import cartReducer from './cart/cart.reducer' //local storage for Redux

import directoryReducer from '../redux/directory/directory.reducer'

import shopReducer from '../redux/shop/shop.reducer'

const persistConfig = {
    key : "root",
    storage,
    whitelist : [
        'cart',
    ]
}

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory: directoryReducer,
    shop : shopReducer
});

export default persistReducer(persistConfig, rootReducer) 