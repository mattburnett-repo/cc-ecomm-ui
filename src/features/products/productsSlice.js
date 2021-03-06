import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

import { selectJwtToken } from '../auth/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProducts = createAsyncThunk (
    'products/getProducts',
    async ( props, thunkAPI ) => {  
        let theApiUrl = API_BASE_URL + '/api/v1/product'
        let authToken = selectJwtToken(thunkAPI.getState())

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
                // console.log('getProducts 200', data)
                return data
            } else if (response.status === 401) {
                console.log('getProducts get request auth fail.')
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getProductsListing

export const getProductsByCategory = createAsyncThunk (
    'products/getProductsByCategory',
    async (categoryId, thunkAPI) => {  
        let theApiUrl = API_BASE_URL + `/api/v1/product/category/${categoryId}`
        let authToken = selectJwtToken(thunkAPI.getState())

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
                // console.log('getProducts 200', data)
                return data
            } else if (response.status === 401) {
                console.log('getProductsByCategory get request auth fail.')
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getProductsByCategory

export const getProductById = createAsyncThunk (
    'products/getProductById',
    async (product_id, thunkAPI) => {  
        let theApiUrl = API_BASE_URL + `/api/v1/product/${product_id}`
        let authToken = selectJwtToken(thunkAPI.getState())

        // console.log('getProductById', product_id)

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
                // console.log('getProductById 200', data[0]) 
                console.log('productById ', data)
                return data[0] // FIXME: shouldn't have to juggle arrays when assigning to state...
            } else if (response.status === 401) {
                console.log('getProductById get request auth fail.')
                // return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getProductById

// search products
export const searchProducts = createAsyncThunk (
    'products/searchProducts',
    async(props, thunkAPI) => {
        let theApiUrl = API_BASE_URL + `/api/v1/product/search`
        let authToken = selectJwtToken(thunkAPI.getState())

        const { searchTerm } = props

        try {
            const response = await fetch(
                theApiUrl,
                {
                    method: 'POST',
                    headers:{
                        'Accept': "*/*",
                        'Content-Type': "application/json",
                        'Authorization': `Bearer ${authToken}`,                        
                    },
                    body: JSON.stringify({
                        searchTerm: searchTerm
                    }),
                    credentials: 'include'
                }
            )
            
            let data = response.json()

            if (response.status === 200) {
                // console.log('getProducts 200', data)
                return data
            } else if (response.status === 401) {
                console.log('searchProducts get request auth fail.')
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error: ", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    } // end async
)   // end searchProducts


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
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  

            .addCase(getProductById.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.product = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  

            .addCase(getProductsByCategory.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getProductsByCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })

            .addCase(searchProducts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectProducts = state => state.products.products;
export const selectProduct = state => state.products.product;

export const productsSlice = createSlice(options);

export default productsSlice.reducer;