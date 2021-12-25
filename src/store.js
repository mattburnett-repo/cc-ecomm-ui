import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import productCategoryReducer from './features/productCategory/productCategorySlice'
// import dashboardReducer from './features/dashboard/dashboardSlice'
import ordersReducer from './features/orders/ordersSlice'
import cartsReducer from './features/carts/cartsSlice'
// import orderReducer from './features/order/orderSlice

function rootReducer() {
    return {
        reducer: {
            auth: authReducer,
            // dashboard: dashboardReducer,
            productCategories: productCategoryReducer,
            orders: ordersReducer,
            carts: cartsReducer,
            // order: orderReducer
        }    
    }
}

const store = configureStore(rootReducer());

export default store;