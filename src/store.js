import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import productCategoryReducer from './features/productCategory/productCategorySlice'
import productsReducer from './features/products/productsSlice'
import ordersReducer from './features/orders/ordersSlice'
import cartsReducer from './features/carts/cartsSlice'
import addressesReducer from './features/addresses/addressesSlice'
import paymentsReducer from './features/payments/paymentsSlice'

function rootReducer() {
    return {
        reducer: {
            auth: authReducer,
            productCategories: productCategoryReducer,
            orders: ordersReducer,
            carts: cartsReducer,
            products: productsReducer,
            addresses: addressesReducer,
            payments: paymentsReducer,
        }    
    }
}

const store = configureStore(rootReducer());

export default store;