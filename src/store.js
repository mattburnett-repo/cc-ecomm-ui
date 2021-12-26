import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import productCategoryReducer from './features/productCategory/productCategorySlice'
import productsListingReducer from './features/products/productsSlice'
import ordersReducer from './features/orders/ordersSlice'
import cartsReducer from './features/carts/cartsSlice'

function rootReducer() {
    return {
        reducer: {
            auth: authReducer,
            productCategories: productCategoryReducer,
            orders: ordersReducer,
            carts: cartsReducer,
            products: productsListingReducer,
        }    
    }
}

const store = configureStore(rootReducer());

export default store;