import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

import { selectJwtToken } from '../auth/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProductCategories = createAsyncThunk (
    'product-category/getProductCategories',
    async ( props, thunkAPI ) => {  
        let theApiUrl = API_BASE_URL + '/api/v1/product-category'
        let authToken = selectJwtToken(thunkAPI.getState())

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
                console.log('productCategories get request auth fail.')
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getProductCategories

const options = {
    name: 'product-category',
    initialState: {
        categories: [],
        isLoading: false,
        hasError: false,
        errorMsg: '',
    },   
    reducers: {     
        getProductCategoriesTestOutput: (state, action) => {       
            console.log('get product categories testOutput');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductCategories.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProductCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProductCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectProductCategories = state => state.productCategories.categories;

export const productCategorySlice = createSlice(options);

export default productCategorySlice.reducer;