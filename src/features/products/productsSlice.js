import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';
import { selectJwtToken } from '../auth/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProductsListing = createAsyncThunk (
    'products/getProductsListing',
    async () => {  
        let theApiUrl = API_BASE_URL + '/api/v1/product'
        let authToken = useSelector(selectJwtToken)

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
                console.log('getProductsListing 200', data)
                return data
            } else if (response.status === 401) {
                console.log('getProductsListing get request auth fail.')
                // return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getProductsListing

const options = {
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        hasError: false,
        errorMsg: '',
    },   
    reducers: {     
        getProductsListingTestOutput: (state, action) => {       
            console.log('get products listing testOutput');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsListing.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProductsListing.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProductsListing.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectProductsListing = state => state.products.products;

export const productsListingsSlice = createSlice(options);

export default productsListingsSlice.reducer;