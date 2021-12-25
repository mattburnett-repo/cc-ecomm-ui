import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';
import { selectJwtToken } from '../auth/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getCarts = createAsyncThunk (
    'orders/getCarts',
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
            // console.log('data[0] ', data[0])

            // let data = await response;
            // let text = await response.text()
            // let body = await text.body();

            // console.log('data.id ' + data.id)

            // console.log('response.status: ' + response.status)
            // console.log('text: ' + text)

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
) // end getCarts

const options = {
    name: 'carts',
    initialState: {
        carts: [],
        isLoading: false,
        hasError: false,
        errorMsg: '',
    },   
    reducers: {     
        getCartsTestOutput: (state, action) => {       
            console.log('get carts testOutput');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCarts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.carts = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getCarts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectCarts = state => state.carts.carts;

export const cartsSlice = createSlice(options);

export default cartsSlice.reducer;