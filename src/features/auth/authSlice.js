import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// import { selectJwtToken } from '../auth/authSlice';

export const localAuthLogin = createAsyncThunk (
    'auth/localAuthLogin',
    async ( props, thunkAPI ) => {
        const { username, password } = props;     
        let theApiUrl = API_BASE_URL + '/api/v1/auth/local'

        // FIXME: needs to test if server is available and handle when it's down
        //          test for response net::ERR_CONNECTION_REFUSED
        try { 
            const response = await fetch(
                theApiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Accept': "*/*",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                }
            )

            let data = await response.json()

            if(response.status === 401) {
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
        } catch (e) {
            // TODO: catch / handle net::ERR_CONNECTION_REFUSED. e -> 'Type Error: Failed to fetch'
            //      send some sort of message back to the UI. right now a failed login just sits there, mutely
            console.log("Error in authSlice auth/localAuthLogin: ", e) 
            console.log("Probably because the API server is down / not started.") 
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end localAuthLogin

// TODO: implement better this once we get auth flow sorted out. 
// FIXME: other slices should be cleared out when logout successful
export const localAuthLogout = createAsyncThunk (
    'auth/localAuthLogout',
    async ( props, thunkAPI ) => {
        let theApiUrl = API_BASE_URL + '/api/v1/auth/logout'

        try { 
            const response = await fetch(
                theApiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Accept': "*/*",
                        'Content-Type': "application/json"
                    },
                }
            )

            // eslint-disable-next-line 
            if (response.status == 200) {         
                // TODO: needs to clear out other slices (orders, carts, etc)   
                return {userData: '', isAuthenticated: false}  
            } else {
            //   return thunkAPI.rejectWithValue(data)
                console.log('response.status ' + response.status + ' authSlice fetch un successful')
                return {message: 'logout un successful'} 
            }
        } catch (e) {
            console.log('error in auth/localAuthLogout: ' + e);
        } // end try catch
    }
) // end localAuthLogout

const options = {
    name: 'auth',
    initialState: {
        userData: '',
        isLoading: false,
        hasError: false,
        errorMsg: '',
        isAuthenticated: false
    },   
    reducers: {     
        localAuthLoginTestOutput: (state, action) => {       
            console.log('auth/local/login/testOutput');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(localAuthLogin.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(localAuthLogin.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.isAuthenticated = true;
                state.errorMsg = '';
            })
            .addCase(localAuthLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  

            .addCase(localAuthLogout.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })
            .addCase(localAuthLogout.fulfilled, (state, action) => {
                // state.userData = action.payload.userData;
                state.userData = '';
                state.isLoading = false;
                state.hasError = false;
                state.isAuthenticated = false;
                state.errorMsg = '';
            })
            .addCase(localAuthLogout.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectUserData = state => state.auth.userData;
export const selectJwtToken = state => state.auth.userData.jwtAuthToken;

export const authSlice = createSlice(options);
export const { localAuthLoginTestOutput } = authSlice.actions;

export default authSlice.reducer;
