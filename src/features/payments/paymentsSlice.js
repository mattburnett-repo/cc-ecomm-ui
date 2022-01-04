

import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

import { selectUserData, selectJwtToken } from '../auth/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const savePayment = createAsyncThunk (
    'payments/savePayment',
    async ( props, thunkAPI ) => {
        const { nameOnCard, paymentTypeId, cardNumber, expDate, orderAmount} = props
        let theApiUrl = API_BASE_URL + '/api/v1/payment'

        const authToken = selectJwtToken(thunkAPI.getState());

        const user = selectUserData(thunkAPI.getState())
        const userId = user.user_id

        // FIXME: needs to test if server is available and handle when it's down
        //         test for response net::ERR_CONNECTION_REFUSED
        try {
            const response = await fetch(
                theApiUrl,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Accept': "*/*",
                        'Content-Type': "application/json",
                        'Authorization': `Bearer ${authToken}`,
                    },
                    body: JSON.stringify({
                        userId: userId,
                        nameOnCard: nameOnCard, 
                        paymentTypeId: paymentTypeId, 
                        cardNumber: cardNumber, 
                        expDate: expDate, 
                        orderAmount: orderAmount, 
                    }),
                }
            ) // end fetch

            let data = await response.json()

            if(response.status === 401) {
                console.log('paymentssSlice / savePayment auth fail')
                // TODO: implement flash message to UI
                return thunkAPI.rejectWithValue(data)
            } else if (response.status === 200) {

                return data;
            } else {
                console.log('response.status ' + response.status + '  paymentsSlice fetch un successful')
                // return {message: 'login un successful', isAuthorized: false} 

                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            // TODO: catch / handle net::ERR_CONNECTION_REFUSED. e -> 'Type Error: Failed to fetch'
            //      send some sort of message back to the UI. right now a failed login just sits there, mutely
            console.log("Error in paymentsSlice saveAddress: ", e) 
            console.log("Probably because the API server is down / not started.") 
            return thunkAPI.rejectWithValue(e.response.data)
        }
    } // end async
) // end savePayment

export const getPaymentsByUserId = createAsyncThunk (
    'payments/getPaymentsByUserId',
    async ( user_id, thunkAPI ) => {
        let theApiUrl = API_BASE_URL + '/api/v1/payment/user/' + user_id
        const authToken = selectJwtToken(thunkAPI.getState());

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
                // console.log('getPaymentsByUserId 200 ', data[0])
                return {data}
            } else if (response.status === 401) {
                console.log('getPaymentsByUserId get request auth fail.')
                return thunkAPI.rejectWithValue(data)
            }
        } catch(e) {
            console.log("Error: ", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    } // end async
) // end getPaymentsByUserId

export const getPaymentTypes = createAsyncThunk (
    'payments/getPaymentTypes',
    async ( props, thunkAPI) => {
        let theApiUrl = API_BASE_URL + '/api/v1/payment-type'
        const authToken = selectJwtToken(thunkAPI.getState()); 
        
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
                // console.log('getPaymentTypes 200 ', data[0])
                return {data}
            } else if (response.status === 401) {
                console.log('getPaymentTypes get request auth fail.')
                return thunkAPI.rejectWithValue(data)
            }
        } catch(e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)            
        }
    }
) // end getPaymentType

const options = {
    name: 'payments',
    initialState: {
        currentPayment: [],
        savedPayments: [],
        paymentTypes: [],
        isLoading: false,
        hasError: false,
        errorMsg: ''
    },
    reducers: {
        testOutput: (state, action) => {
            console.log('payments/testOutput')
        },
        setCurrentPayment: (state, action) => {
            
            return {...state, currentPayment: action.payload}
        }
    }, // end reducers
    extraReducers: (builder) => {
        builder 
            .addCase(savePayment.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(savePayment.fulfilled, (state, action) => {
                state.savedPayments = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(savePayment.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })

            .addCase(getPaymentsByUserId.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getPaymentsByUserId.fulfilled, (state, action) => {
                state.savedPayments = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getPaymentsByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })

            .addCase(getPaymentTypes.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getPaymentTypes.fulfilled, (state, action) => {
                state.paymentTypes = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getPaymentTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })


    } // end extra reducers
} // end options

export const selectSavedPayments = state => state.payments.savedPayments
export const selectCurrentPayment = state => state.payments.currentPayment
export const selectPaymentTypes = state => state.payments.paymentTypes.data

export const paymentsSlice = createSlice(options)
export const { testOutput } = paymentsSlice.actions
export const { setCurrentPayment } = paymentsSlice.actions

export default paymentsSlice.reducer