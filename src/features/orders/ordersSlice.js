import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';
import { selectJwtToken } from '../auth/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// console.log('api base url ' + API_BASE_URL);

export const getOrders = createAsyncThunk (
    'orders/getOrders',
    async () => {
        // const { user_id } = props;     
        let theApiUrl = API_BASE_URL + '/api/v1/order'
        let authToken = useSelector(selectJwtToken)

        // FIXME: needs to test if server is available and handle when it's down
        //          test for response ERR_CONNECTION_REFUSED
        try { 
            const response = await fetch(
                theApiUrl,
                {
                    method: 'GET',
                        headers: {
                            'Accept': "*/*",
                            'Content-Type': "application/json",
                            'Authorization': `Bearer ${authToken}`,
                        },
                        credentials: 'include',
                }
            )

            let data = await response.json();

            if (response.status === 200) {
                return data
            } else if (response.status === 401) {
                console.log('getOrders get request auth fail.')
                // return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getOrders

export const getOrdersByUserId = createAsyncThunk (
    'orders/getOrdersByUserId',
    async ( user_id ) => {
        let theApiUrl = API_BASE_URL + '/api/v1/order/user/' + user_id
        let authToken = useSelector(selectJwtToken)

        // FIXME: needs to test if server is available and handle when it's down
        //          test for response ERR_CONNECTION_REFUSED
        try { 
            const response = await fetch(
                theApiUrl,
                {
                    method: 'GET',
                        headers: {
                            'Accept': "*/*",
                            'Content-Type': "application/json",
                            'Authorization': `Bearer ${authToken}`,
                        },
                        credentials: 'include',
                }
            )

            let data = await response.json();

            if (response.status === 200) {
                return data
            } else if (response.status === 401) {
                console.log('getOrdersByUserId get request auth fail.')
                // return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getOrdersByUserId

const options = {
    name: 'orders',
    initialState: {
        currentOrder: [],
        savedOrders: [],     
        isLoading: false,
        hasError: false,
        errorMsg: '',
    },   
    reducers: {     
        getOrdersTestOutput: (state, action) => {       
            console.log('get orders testOutput');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.savedOrders = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  

            .addCase(getOrdersByUserId.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getOrdersByUserId.fulfilled, (state, action) => {
                state.savedOrders = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getOrdersByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectCurrentOrder = state => state.orders.currentOrder;
export const selectSavedOrders = state => state.orders.savedOrders;

export const ordersSlice = createSlice(options);

export default ordersSlice.reducer;
