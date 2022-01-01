import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';
import { selectJwtToken } from '../auth/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const saveAddress = createAsyncThunk(
    'addresses/saveAddress',
    async ( props, thunkAPI ) => {
        const { firstName, lastName, address1, address2, city, stateProvince, postalCode, country } = props;     
        let theApiUrl = API_BASE_URL + '/api/v1/address'
        let authToken = useSelector(selectJwtToken)

        // FIXME: needs to test if server is available and handle when it's down
        //          test for response net::ERR_CONNECTION_REFUSED
        try {
            const response = await fetch(
                theApiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Accept': "*/*",
                        'Content-Type': "application/json",
                        'Authorization': `Bearer ${authToken}`,
                    },
                    body: JSON.stringify({
                        firstName: firstName, 
                        lastName: lastName, 
                        address1: address1, 
                        address2: address2, 
                        city: city, 
                        stateProvince: stateProvince, 
                        postalCode: postalCode, 
                        country: country
                    }),
                }
            ) // end fetch

            let data = await response.json()

            if(response.status === 401) {
                console.log('addressesSlice / saveAddress auth fail')
                // TODO: implement flash message to UI
                return thunkAPI.rejectWithValue(data)
            } else if (response.status === 200) {
                const { id, user_name, email } = data.user;
                const { token } = data;
                // localStorage.setItem("token", data.token)

                return {user_id: id, username: user_name, email: email, jwtAuthToken: token};
            } else {
                // console.log('response.status ' + response.status + ' authSlice fetch un successful')
                // return {message: 'login un successful', isAuthorized: false} 

                return thunkAPI.rejectWithValue(data)
            }
        } catch(e) {
            // TODO: catch / handle net::ERR_CONNECTION_REFUSED. e -> 'Type Error: Failed to fetch'
            //      send some sort of message back to the UI. right now a failed login just sits there, mutely
            console.log("Error in addressesSlice saveAddress: ", e) 
            console.log("Probably because the API server is down / not started.") 
            return thunkAPI.rejectWithValue(e.response.data)
        }
    } // end async
) // end saveAddress

export const getAddresses = createAsyncThunk(
    'addresses/getAddresses',
    async () => {
        let theApiUrl = API_BASE_URL + '/api/v1/address'
        let authToken = useSelector(selectJwtToken)

        // FIXME: needs to test if server is available and handle when it's down
        //          test for response ERR_CONNECTION_REFUSED
        try{
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
                console.log('getAddresses get request auth fail.')
                // return thunkAPI.rejectWithValue(data)
            }
        } catch(e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    } // end async
) // end getAddresses

export const getAddressById = createAsyncThunk(
    'addresses/getAddressesById',
    async ( address_id ) => {
        let theApiUrl = API_BASE_URL + '/api/v1/address/' + address_id
        let authToken = useSelector(selectJwtToken)

        // FIXME: needs to test if server is available and handle when it's down
        //          test for response ERR_CONNECTION_REFUSED
        try{
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
                console.log('getAddressesById get request auth fail.')
                // return thunkAPI.rejectWithValue(data)
            }
        } catch(e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getAddressById

export const getAddressesByUserId = createAsyncThunk(
    'addresses/getAddressesByUserId',
    async ( user_id ) => {
        let theApiUrl = API_BASE_URL + '/api/v1/address/user' + user_id
        let authToken = useSelector(selectJwtToken)

        // FIXME: needs to test if server is available and handle when it's down
        //          test for response ERR_CONNECTION_REFUSED
        try{
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
                console.log('getAddressesByUserId get request auth fail.')
                // return thunkAPI.rejectWithValue(data)
            }
        } catch(e) {
            console.log("Error: ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end getAddressesByUserId

const options = {
    name: 'addresses',
    initialState: {
        currentAddress: [],
        savedAddresses: [],
        isLoading: false,
        hasError: false,
        errorMsg: '',
    },
    reducers: {
        getAddressesTestOutput: (state, action) => {
            console.log('getAddresses test output')
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(saveAddress.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(saveAddress.fulfilled, (state, action) => {
                state.savedAddresses = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(saveAddress.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })

            .addCase(getAddresses.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getAddresses.fulfilled, (state, action) => {
                state.savedAddresses = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getAddresses.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })

            .addCase(getAddressById.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getAddressById.fulfilled, (state, action) => {
                state.currentAddress = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getAddressById.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })

            .addCase(getAddressesByUserId.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getAddressesByUserId.fulfilled, (state, action) => {
                state.savedAddresses = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(getAddressesByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })
    } // end extra reducers
} // end options

export const selectSavedAddresses = state => state.savedAddresses;
export const selectCurrentAddress = state => state.currentAddress;

export const addressesSlice = createSlice(options);

export default addressesSlice.reducer;