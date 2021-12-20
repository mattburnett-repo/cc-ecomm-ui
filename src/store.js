import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
// import dashboardReducer from './features/dashboard/dashboardSlice'
// import cartReducer from './features/cart/cartSlice'

function rootReducer() {
    return {
        reducer: {
            auth: authReducer
            // dashboard: dashboardReducer,
            // cart: cartReducer
        }    
    }
}

const store = configureStore(rootReducer());

export default store;