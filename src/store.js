

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import authReducer from './features/auth/authSlice';
import productCategoryReducer from './features/productCategory/productCategorySlice'
import productsReducer from './features/products/productsSlice'
import ordersReducer from './features/orders/ordersSlice'
import cartsReducer from './features/carts/cartsSlice'
import addressesReducer from './features/addresses/addressesSlice'
import paymentsReducer from './features/payments/paymentsSlice'

// function rootReducer() {
//     return {
//         reducer: {
//             auth: authReducer,
//             productCategories: productCategoryReducer,
//             orders: ordersReducer,
//             carts: cartsReducer,
//             products: productsReducer,
//             addresses: addressesReducer,
//             payments: paymentsReducer,
//         }    
//     }
// }

// const store = configureStore(rootReducer());

const reducers = combineReducers({
    auth: authReducer,
    productCategories: productCategoryReducer,
    orders: ordersReducer,
    carts: cartsReducer,
    products: productsReducer,
    addresses: addressesReducer,
    payments: paymentsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'carts', 'addresses'],
    blacklist: []
  };

// // https://edvins.io/how-to-use-redux-persist-with-redux-toolkit
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer
});

export default store;