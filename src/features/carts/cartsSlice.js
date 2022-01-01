import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';
import { selectJwtToken } from '../auth/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getSavedCarts = createAsyncThunk ( 
    'orders/getSavedCarts',
    async () => {
        // const { user_id } = props;     
        let theApiUrl = API_BASE_URL + '/api/v1/cart' 
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
                console.log('getCarts get request auth fail.')
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getSavedCarts

export const getSavedCartsByUserId = createAsyncThunk (
    'orders/getSavedCartsByUserId',
    async ( user_id ) => {
        let theApiUrl = API_BASE_URL + '/api/v1/cart/user/' + user_id 
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
                console.log('getCartsByUserId get request auth fail.')
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getSavedCartsByUserId

// TODO: need async saveCurrentCart

const options = {
    name: 'carts',
    initialState: {
        currentCart: [],
        savedCarts: [],
        isLoading: false,
        hasError: false,
        errorMsg: '',
    },   
    reducers: {     
        getSavedCartsTestOutput: (state, action) => {       
            console.log('getSavedCartsTestOutput');
        },
        getCurrentCartTestOutput: (state, action) => {
            console.log('getCurrentCartTestOutput')
        },
        // https://www.youtube.com/watch?v=MNs_7avLIJ4
        addItemToCurrentCart: (state, action) => {
            const productData = action.payload.data
            // check if item is already in the cart
            const isInCart = state.currentCart.some(item => item.id === productData.id ? true : false)

            return { ...state, 
                        currentCart: isInCart ? state.currentCart.map(
                            item => item.id === productData.id ? 
                                {...item, quantity: item.quantity +1} 
                                : item)
                            : [...state.currentCart, {...productData, quantity: 1}]
                    }
        },
        removeItemFromCurrentCart: (state, action) => {
            // TODO: reducer doesn't see action.payload.id, but rather only action.payload. ???
            return {
                ...state,
                currentCart: state.currentCart.filter(item => item.id !== action.payload)
            }
        },
        changeCurrentCartItemQuantity: (state, action) => {
            return {
                ...state,
                currentCart: state.currentCart.map(
                    item => item.id === action.payload.id ?
                        {...item, quantity: action.payload.quantity}
                        : item
                    )
            }
        },
        loadItem: (state, action) => {
            console.log('inside of loadItem reducer')

        //     return {
        //         ...state,
        //         currentItem: action.payload
        //     }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSavedCarts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getSavedCarts.fulfilled, (state, action) => {
                state.savedCarts = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getSavedCarts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  

            .addCase(getSavedCartsByUserId.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getSavedCartsByUserId.fulfilled, (state, action) => {
                state.savedCarts = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getSavedCartsByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectCurrentCart = state => state.carts.currentCart;
export const selectSavedCarts = state => state.carts.savedCarts;

export const cartsSlice = createSlice(options);

export const { getSavedCartsTestOutput, getCurrentCartTestOutput } = cartsSlice.actions
export const { addItemToCurrentCart, removeItemFromCurrentCart, changeItemQuantity } = cartsSlice.actions

export default cartsSlice.reducer;